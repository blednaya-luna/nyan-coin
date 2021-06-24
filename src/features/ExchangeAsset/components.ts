import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import { $amount, setAmount, exchangeAsset } from './model';

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
    onClick: () => exchangeAsset(),
    disabled: $amount.map((amount) => amount <= 0),
  },
});
