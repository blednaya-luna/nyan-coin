import { attach, createEvent, restore } from 'effector';

import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const setEmail = createEvent<string>();
export const $email = restore(setEmail, '');

export const signUpFx = attach({
  effect: callCallableFunctionWithFeeFx,
  source: {
    email: $email,
  },
  mapParams: (_: void, { email }) => ({
    func: 'signUp',
    args: [
      {
        type: 'string',
        value: email,
      },
    ],
  }),
});
