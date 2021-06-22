import { reflect } from '@effector/reflect';

import { TextField, textFieldOnChangePrepend } from 'components/TextField';
import { Button } from 'components/Button';

import { $email, setEmail, signUpFx } from './model';

export const EmailTextField = reflect({
  view: TextField,
  bind: {
    value: $email,
    onChange: setEmail.prepend(textFieldOnChangePrepend),
  },
});

export const SignUpButton = reflect({
  view: Button,
  bind: {
    disabled: $email.map((email) => !email),
    onClick: () => signUpFx(),
  },
});
