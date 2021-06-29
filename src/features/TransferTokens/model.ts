import { attach, createEvent, forward, guard, restore } from 'effector';

import { DAPP_SCRIPT } from 'config';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { User } from 'stores/pages/admin/users/types';

export const setRecipient = createEvent<User>();
export const resetRecipient = createEvent();
export const $recipient = restore(setRecipient, null).reset(resetRecipient);

export const $transferModalIsOpen = $recipient.map(Boolean);

export const setAmount = createEvent<number>();
export const $amount = restore(setAmount, 0).reset(resetRecipient);

export const transferTokens = createEvent();

export const transferTokensFx = guard({
  clock: transferTokens,
  source: [$recipient, $amount],
  filter: (source): source is [User, number] => {
    const [recipient, amount] = source;
    return recipient !== null && amount > 0;
  },
  target: attach<[User, number], typeof callCallableFunctionWithFeeFx>({
    effect: callCallableFunctionWithFeeFx,
    mapParams: ([recipient, amount]) => ({
      func: DAPP_SCRIPT.TRANSFER_TOKEN,
      args: [
        {
          type: 'string',
          value: recipient.address,
        },
        {
          type: 'integer',
          value: amount,
        },
      ],
    }),
  }),
});

forward({
  from: transferTokensFx.done,
  to: resetRecipient,
});
