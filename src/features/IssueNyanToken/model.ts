import { attach, createEvent, restore } from 'effector';

import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { argType } from 'api/constants';

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0);

export const issueNyanTokenFx = attach({
  effect: callCallableFunctionWithFeeFx,
  source: {
    quantity: $quantity,
  },
  mapParams: (_: void, { quantity }) => ({
    func: 'issueNyanToken',
    args: [
      {
        type: argType.integer,
        value: quantity,
      },
    ],
    additionalFee: 1,
  }),
});
