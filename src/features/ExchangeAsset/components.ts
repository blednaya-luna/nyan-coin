import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import {
  $amount,
  setAmount,
  exchangeAsset,
  $exchangeModalIsOpen,
  resetAssetToExchange,
} from './model';

export const ExchangeAssetDialog = reflect({
  view: Dialog,
  bind: {
    open: $exchangeModalIsOpen,
    onClose: resetAssetToExchange,
  },
});

export const AmountTextField = reflect({
  view: TextField,
  bind: {
    value: $amount,
    onChange: setAmount.prepend(textFieldOnChangePrependToNumber),
  },
});

export const CancelExchangeAssetButton = reflect({
  view: Button,
  bind: {
    onClick: () => resetAssetToExchange(),
  },
});

export const ExchangeAssetButton = reflect({
  view: Button,
  bind: {
    onClick: () => exchangeAsset(),
    disabled: $amount.map((amount) => amount <= 0),
  },
});
