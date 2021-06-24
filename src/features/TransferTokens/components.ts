import { reflect } from '@effector/reflect';

import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { Button } from 'components/Button';

import { $amount, setAmount, transferTokens } from './model';

export const AmountTextField = reflect({
  view: TextField,
  bind: {
    value: $amount,
    onChange: setAmount.prepend(textFieldOnChangePrependToNumber),
  },
});

export const TransferTokensButton = reflect({
  view: Button,
  bind: {
    onClick: () => transferTokens(),
    disabled: $amount.map((amount) => amount <= 0),
  },
});
