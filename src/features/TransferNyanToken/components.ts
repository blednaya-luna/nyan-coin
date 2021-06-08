import { combine } from 'effector';
import { reflect } from '@effector/reflect';

import {
  TextField,
  textFieldOnChangePrepend,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { Button } from 'components/Button';
import { $isAuthorized } from 'stores/account';

import {
  $amount,
  $recipient,
  setAmount,
  setRecipient,
  transferNyanTokenFx,
} from './model';

export const TransferNyanTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => transferNyanTokenFx(),
    disabled: combine(
      [$isAuthorized, $recipient, $amount],
      ([isAuthorized, recipient, amount]) =>
        !isAuthorized || recipient.length === 0 || amount < 1,
    ),
  },
});

export const RecipientTextField = reflect({
  view: TextField,
  bind: {
    value: $recipient,
    onChange: setRecipient.prepend(textFieldOnChangePrepend),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});

export const AmountTextField = reflect({
  view: TextField,
  bind: {
    value: $amount,
    onChange: setAmount.prepend(textFieldOnChangePrependToNumber),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});
