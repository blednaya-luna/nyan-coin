import { attach, createEffect, guard } from 'effector';
import { createGate } from 'effector-react';
import { delay } from 'patronum';

import { DAPP } from 'config';
import { getExplorerLink } from 'utils/getExplorerLink';
import { notify } from 'utils/notify';

import { $fee } from '../account';
import {
  SendTxDone,
  SendTxFail,
  ScriptInvocation,
  ScriptInvocationWithFee,
} from './types';
import { updateWavesKeeper } from './utils';

export const WavesKeeperGate = createGate();

const checkWavesKeeperIsInstalledFx = createEffect(() => {
  if ('WavesKeeper' in window) {
    return true;
  }

  notify.warning({
    title: 'Install WavesKeeper',
    link: {
      url: 'https://docs.waves.tech/en/ecosystem/waves-keeper',
      text: 'WavesKeeper',
    },
    autoClose: false,
  });
  return false;
});

const syncWithWavesKeeperFx = createEffect(async () => {
  // needed because types from WavesKeeper definitions is incorrect
  const wavesKeeperInitialPromise = window.WavesKeeper
    .initialPromise as unknown as Promise<WavesKeeper.TWavesKeeperApi>;
  const wavesKeeperAPI = await wavesKeeperInitialPromise;
  const wavesKeeperPublicState = await wavesKeeperAPI.publicState();
  await updateWavesKeeper(wavesKeeperPublicState);

  window.WavesKeeper.on('update', updateWavesKeeper);
});

export const sendTxFx = createEffect<
  WavesKeeper.TSignTransactionData,
  SendTxDone,
  SendTxFail
>(async (tx) => {
  try {
    const rawTx = await WavesKeeper.signAndPublishTransaction(tx);
    const parsedTx = JSON.parse(rawTx);

    notify.info({
      title: 'Transaction sent',
      link: {
        url: getExplorerLink('tx', parsedTx.id),
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
});

export const invokeScriptFx = createEffect<
  ScriptInvocation,
  SendTxDone,
  SendTxFail
>(async ({ func, args, payment = [], fee }) =>
  sendTxFx({
    type: 16,
    data: {
      dApp: DAPP,
      call: {
        function: func,
        args,
      },
      fee: {
        assetId: 'WAVES',
        tokens: fee,
      },
      payment,
    },
  }),
);

export const invokeScriptWithFeeFx = attach<
  ScriptInvocationWithFee,
  typeof $fee,
  typeof invokeScriptFx
>({
  effect: invokeScriptFx,
  source: $fee,
  mapParams: ({ additionalFee, ...payload }, fee) => ({
    ...payload,
    fee: additionalFee ? fee + additionalFee : fee,
  }),
});

delay({
  source: WavesKeeperGate.open,
  timeout: 1000,
  target: checkWavesKeeperIsInstalledFx,
});

guard({
  source: checkWavesKeeperIsInstalledFx.doneData,
  filter: (wavesKeeperInstalled) => wavesKeeperInstalled,
  target: syncWithWavesKeeperFx,
});
