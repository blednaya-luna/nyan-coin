import { reflect } from '@effector/reflect';
import { combine } from 'effector';

import { Button } from 'components/Button';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { $isAuthorized } from 'stores/account';

import { $quantity, setQuantity, reissueNyanTokenFx } from './model';

export const ReissueNyanTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => reissueNyanTokenFx(),
    disabled: combine(
      [$isAuthorized, $quantity],
      ([isAuthorized, quantity]) => !isAuthorized || quantity < 1,
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
