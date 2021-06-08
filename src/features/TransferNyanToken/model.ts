import { attach, createEvent, restore } from 'effector';

import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const setRecipient = createEvent<string>();
export const $recipient = restore(setRecipient, '');

export const setAmount = createEvent<number>();
export const $amount = restore(setAmount, 0);

export const transferNyanTokenFx = attach({
  effect: callCallableFunctionWithFeeFx,
  source: {
    recipient: $recipient,
    amount: $amount,
  },
  mapParams: (_: void, { recipient, amount }) => ({
    func: 'transferNyanToken',
    args: [
      {
        type: 'string',
        value: recipient,
      },
      {
        type: 'integer',
        value: amount,
      },
    ],
  }),
});
