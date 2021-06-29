import {
  attach,
  createEvent,
  createStore,
  forward,
  guard,
  restore,
  sample,
} from 'effector';

import { DAPP_SCRIPT } from 'config';
import { getUserDataFx } from 'stores/account';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const openSignUpModal = createEvent();
export const closeSignUpModal = createEvent();
export const $signUpModalIsOpen = createStore(false)
  .on(openSignUpModal, () => true)
  .on(closeSignUpModal, () => false);

export const setEmail = createEvent<string>();
export const $email = restore(setEmail, '').reset(closeSignUpModal);

export const signUp = createEvent();
export const signUpFx = sample({
  clock: signUp,
  target: attach<void, typeof $email, typeof callCallableFunctionWithFeeFx>({
    effect: callCallableFunctionWithFeeFx,
    source: $email,
    mapParams: (_, email) => ({
      func: DAPP_SCRIPT.SIGN_UP,
      args: [
        {
          type: 'string',
          value: email,
        },
      ],
    }),
  }),
});

guard({
  source: getUserDataFx.doneData,
  filter: (userData) => userData.length === 0,
  target: openSignUpModal,
});

forward({
  from: signUpFx.doneData,
  to: closeSignUpModal,
});
