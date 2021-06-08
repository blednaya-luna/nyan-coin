import { combine, createEffect, createEvent, guard, restore } from 'effector';
import { createGate } from 'effector-react';
import { delay } from 'patronum';
import { nodeInteraction } from '@waves/waves-transactions';
import { toast } from 'react-toastify';

import { signInWithKeeper } from 'features/SignIn/model';

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
  if (window.WavesKeeper) {
    setIsWavesKeeperInstalled(true);
    console.info('WavesKeeper is installed');
  } else {
    console.error('WavesKeeper is not installed');
    toast.warn('Install WavesKeeper');
  }
});

const setupSynchronizationWithWavesKeeperFx = createEffect(async () => {
  // needed because types from WavesKeeper definitions is incorrect
  const wavesKeeperAPI = (await window.WavesKeeper
    .initialPromise) as unknown as WavesKeeper.TWavesKeeperApi;

  if (wavesKeeperAPI) {
    setIsWavesKeeperInitialized(true);
    console.info('WavesKeeper is initialized');

    const wavesKeeperPublicState = await wavesKeeperAPI.publicState();
    if (wavesKeeperPublicState) {
      setIsAuthorized(true);
      console.info('Application is authorized in WavesKeeper');

      await updateWavesKeeper(wavesKeeperPublicState);
      window.WavesKeeper.on('update', updateWavesKeeper);
    }
  }
});

export const sendTx = createEffect((tx: WavesKeeper.TSignTransactionData) =>
  window.WavesKeeper.signAndPublishTransaction(tx)
    .then((tx) => {
      const transaction = JSON.parse(tx);
      console.log('Hurray! Ive invoked the script!!!', transaction);
    })
    .catch((error) => {
      console.error('Something went wrong', error);
    }),
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
