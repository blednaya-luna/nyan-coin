import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';
import { TextField, textFieldOnChangePrepend } from 'components/TextField';

import {
  $email,
  setEmail,
  $signUpModalIsOpen,
  closeSignUpModal,
  signUp,
} from './model';

export const SignUpDialog = reflect({
  view: Dialog,
  bind: {
    open: $signUpModalIsOpen,
    onClose: closeSignUpModal,
  },
});

export const EmailTextField = reflect({
  view: TextField,
  bind: {
    value: $email,
    onChange: setEmail.prepend(textFieldOnChangePrepend),
  },
});

export const CancelSignUpButton = reflect({
  view: Button,
  bind: {
    onClick: () => closeSignUpModal(),
  },
});

export const SignUpButton = reflect({
  view: Button,
  bind: {
    onClick: () => signUp(),
    disabled: $email.map((email) => email.length <= 0),
  },
});
