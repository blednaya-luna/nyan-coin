import { createEffect, attach } from 'effector';

import { dApp } from 'api/constants';

import { $fee } from './account';
import { sendTx } from './keeper';

type CallCallableFunctionFxPayload = {
  func: string;
  args: any;
  payment?: any;
  fee: number;
};

export const callCallableFunctionFx = createEffect<
  CallCallableFunctionFxPayload,
  void,
  void
>(async ({ func, args, payment = [], fee }) => {
  const transactionData: WavesKeeper.IScriptInvocationTx = {
    dApp,
    call: {
      function: func,
      args,
    },
    fee: {
      tokens: fee,
      assetId: 'WAVES',
    },
    payment,
  };

  const tx: WavesKeeper.TScriptInvocationTxData = {
    type: 16,
    data: transactionData,
  };

  await sendTx(tx);
});

export const callCallableFunctionWithFeeFx = attach({
  effect: callCallableFunctionFx,
  source: {
    fee: $fee,
  },
  mapParams: (
    {
      func,
      args,
      payment,
      additionalFee,
    }: Omit<CallCallableFunctionFxPayload, 'fee'> & { additionalFee?: number },
    { fee },
  ) => ({
    func,
    args,
    payment,
    fee: additionalFee ? fee + additionalFee : fee,
  }),
});
