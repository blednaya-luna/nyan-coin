import { createEffect, attach } from 'effector';

import { dApp } from 'api/constants';

import { $fee } from '../account';
import { sendTx } from '../keeper';
import {
  CallCallableFunctionFxPayload,
  CallCallableFunctionWithFeeFxPayload,
} from './types';

export const callCallableFunctionFx = createEffect<
  CallCallableFunctionFxPayload,
  void
>(async ({ func, args, payment = [], fee }) =>
  sendTx({
    type: 16,
    data: {
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
    },
  }),
);

export const callCallableFunctionWithFeeFx = attach<
  CallCallableFunctionWithFeeFxPayload,
  typeof $fee,
  typeof callCallableFunctionFx
>({
  effect: callCallableFunctionFx,
  source: $fee,
  mapParams: ({ additionalFee, ...payload }, fee) => ({
    ...payload,
    fee: additionalFee ? fee + additionalFee : fee,
  }),
});
