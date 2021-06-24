import { reflect } from '@effector/reflect';

import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { Button } from 'components/Button';

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
