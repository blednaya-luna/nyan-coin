import { attach, createEvent, createStore, restore } from 'effector';

import { argType, dAppScript } from 'api/constants';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const toggleOpenSignUpModal = createEvent();

export const $signUpModalIsOpen = createStore(false).on(
  toggleOpenSignUpModal,
  (signUpModalIsOpen) => !signUpModalIsOpen,
);

export const setEmail = createEvent<string>();
export const $email = restore(setEmail, '');

export const signUpFx = attach<
  void,
  typeof $email,
  typeof callCallableFunctionWithFeeFx
>({
  effect: callCallableFunctionWithFeeFx,
  source: $email,
  mapParams: (_, email) => ({
    func: dAppScript.signUp,
    args: [
      {
        type: argType.string,
        value: email,
      },
    ],
  }),
});
