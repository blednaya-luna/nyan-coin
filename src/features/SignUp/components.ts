import { combine } from 'effector';
import { reflect } from '@effector/reflect';

import { TextField, textFieldOnChangePrepend } from 'components/TextField';
import { Button } from 'components/Button';
import { $isAuthorized } from 'stores/account';

import { $email, setEmail, signUpFx } from './model';

export const SignUpButton = reflect({
  view: Button,
  bind: {
    onClick: () => signUpFx(),
    disabled: combine(
      [$isAuthorized, $email],
      ([isAuthorized, email]) => !isAuthorized || email.length === 0,
    ),
  },
});

export const EmailTextField = reflect({
  view: TextField,
  bind: {
    value: $email,
    onChange: setEmail.prepend(textFieldOnChangePrepend),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});
