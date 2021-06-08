import { attach, createEvent, restore } from 'effector';

import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0);

export const reissueNyanTokenFx = attach({
  effect: callCallableFunctionWithFeeFx,
  source: {
    quantity: $quantity,
  },
  mapParams: (_: void, { quantity }) => ({
    func: 'reissueNyanToken',
    args: [
      {
        type: 'integer',
        value: quantity,
      },
    ],
  }),
});
