import { combine, createEffect, createEvent, guard, restore } from 'effector';
import { createGate } from 'effector-react';
import { delay } from 'patronum';
import { nodeInteraction } from '@waves/waves-transactions';

import { signInWithKeeper } from 'features/SignIn/model';
import { notify } from 'utils/notify';
import { getExplorerLink } from 'utils/getExplorerLink';

import {
  setAddress,
  setIsAuthorized,
  setIsScripted,
  setNetwork,
} from './account';

export const WavesKeeperGate = createGate();

export const setIsWavesKeeperInstalled = createEvent<boolean>();
export const $isWavesKeeperInstalled = restore(
  setIsWavesKeeperInstalled,
  false,
);

export const setIsWavesKeeperInitialized = createEvent<boolean>();
export const $isWavesKeeperInitialized = restore(
  setIsWavesKeeperInitialized,
  false,
);

const updateWavesKeeper = async (
  publicState: WavesKeeper.IPublicStateResponse,
) => {
  setNetwork(publicState.network);

  if (publicState.account) {
    setAddress(publicState.account.address);

    const scriptInfo = await nodeInteraction.scriptInfo(
      publicState.account.address,
      publicState.network.server,
    );
    const isScripted = scriptInfo.script !== null;
    setIsScripted(isScripted);
  }
};

const setupWavesKeeperFx = createEffect(() => {
  if ('WavesKeeper' in window) {
    setIsWavesKeeperInstalled(true);
  } else {
    notify.warning({
      title: 'Install WavesKeeper',
      link: {
        url: 'https://docs.waves.tech/en/ecosystem/waves-keeper',
        text: 'WavesKeeper',
      },
    });
  }
});

const setupSynchronizationWithWavesKeeperFx = createEffect(async () => {
  // needed because types from WavesKeeper definitions is incorrect
  const wavesKeeperInitialPromise = window.WavesKeeper
    .initialPromise as unknown as Promise<WavesKeeper.TWavesKeeperApi>;
  const wavesKeeperAPI = await wavesKeeperInitialPromise;
  setIsWavesKeeperInitialized(true);

  const wavesKeeperPublicState = await wavesKeeperAPI.publicState();
  setIsAuthorized(true);

  await updateWavesKeeper(wavesKeeperPublicState);
  window.WavesKeeper.on('update', updateWavesKeeper);
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

      return error;
    }
  },
);

delay({
  source: WavesKeeperGate.open,
  timeout: 1000,
  target: setupWavesKeeperFx,
});

guard({
  source: signInWithKeeper,
  filter: combine(
    [$isWavesKeeperInstalled, $isWavesKeeperInitialized],
    ([isWavesKeeperInstalled, isWavesKeeperInitialized]) =>
      isWavesKeeperInstalled && !isWavesKeeperInitialized,
  ),
  target: setupSynchronizationWithWavesKeeperFx,
});
