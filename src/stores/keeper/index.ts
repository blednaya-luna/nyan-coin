import { createEffect, createEvent, restore } from 'effector';
import { createGate } from 'effector-react';

import { getExplorerLink } from 'utils/getExplorerLink';
import { notify } from 'utils/notify';

import { setIsAuthorized } from '../account';
import { updateWavesKeeper } from './utils';

export const WavesKeeperGate = createGate();

export const signInWithKeeper = createEvent();

export const setIsWavesKeeperInstalled = createEvent<boolean>();
export const $isWavesKeeperInstalled = restore(
  setIsWavesKeeperInstalled,
  false,
);

export const setupWavesKeeperFx = createEffect(() => {
  if ('WavesKeeper' in window) {
    setIsWavesKeeperInstalled(true);
  } else {
    notify.warning({
      title: 'Install WavesKeeper',
      link: {
        url: 'https://docs.waves.tech/en/ecosystem/waves-keeper',
        text: 'WavesKeeper',
      },
      autoClose: false,
    });
  }
});

export const setupSynchronizationWithWavesKeeperFx = createEffect(async () => {
  // needed because types from WavesKeeper definitions is incorrect
  const wavesKeeperInitialPromise = window.WavesKeeper
    .initialPromise as unknown as Promise<WavesKeeper.TWavesKeeperApi>;
  const wavesKeeperAPI = await wavesKeeperInitialPromise;
  const wavesKeeperPublicState = await wavesKeeperAPI.publicState();
  await updateWavesKeeper(wavesKeeperPublicState);
  window.WavesKeeper.on('update', updateWavesKeeper);
  setIsAuthorized(true);
});

export const sendTx = createEffect(
  async (tx: WavesKeeper.TSignTransactionData) => {
    try {
      const rawTx = await WavesKeeper.signAndPublishTransaction(tx);
      const parsedTx = JSON.parse(rawTx);

      const wavesKeeperPublicState = await WavesKeeper.publicState();
      notify.info({
        title: 'Transaction sent',
        link: {
          url: getExplorerLink(
            wavesKeeperPublicState.network.code,
            parsedTx.id,
            'tx',
          ),
          text: 'View transaction',
        },
      });

      return parsedTx;
    } catch (error) {
      notify.error({
        title: error.message,
        description: error.data,
        code: error.code,
      });

      throw error;
    }
  },
);
