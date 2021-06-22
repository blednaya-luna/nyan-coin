import { combine } from 'effector';
import { reflect } from '@effector/reflect';

import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { Button } from 'components/Button';
import { $isAuthorized } from 'stores/account';

import { $quantity, setQuantity, issueNyanTokenFx } from './model';

export const IssueNyanTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => issueNyanTokenFx(),
    disabled: combine(
      [$isAuthorized, $quantity],
      ([isAuthorized, quantity]) => !isAuthorized || quantity < 0,
    ),
  },
});

export const QuantityTextField = reflect({
  view: TextField,
  bind: {
    value: $quantity,
    onChange: setQuantity.prepend(textFieldOnChangePrependToNumber),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});
