import { attach, createEvent, restore } from 'effector';

import { argType, dAppScript } from 'api/constants';
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
    func: dAppScript.transferToken,
    args: [
      {
        type: argType.string,
        value: recipient,
      },
      {
        type: argType.integer,
        value: amount,
      },
    ],
  }),
});
