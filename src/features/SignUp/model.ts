import {
  attach,
  createEvent,
  createStore,
  forward,
  restore,
  guard,
} from 'effector';

import { DAPP_SCRIPT } from 'config';
import { userLoaded } from 'stores/account';
import { invokeScriptWithFeeFx } from 'stores/keeper';

export const openSignUpModal = createEvent();
export const closeSignUpModal = createEvent();
export const $signUpModalIsOpen = createStore(false)
  .on(openSignUpModal, () => true)
  .on(closeSignUpModal, () => false);

export const setEmail = createEvent<string>();
export const $email = restore(setEmail, '').reset(closeSignUpModal);

export const signUp = createEvent();
export const signUpFx = attach<
  void,
  typeof $email,
  typeof invokeScriptWithFeeFx
>({
  effect: invokeScriptWithFeeFx,
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
});

guard({
  clock: userLoaded,
  filter: (user) => user === null,
  target: openSignUpModal,
});

forward({
  from: signUp,
  to: signUpFx,
});

forward({
  from: signUpFx.doneData,
  to: closeSignUpModal,
});
