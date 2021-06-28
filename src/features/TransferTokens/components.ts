import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import {
  $amount,
  $transferModalIsOpen,
  resetRecipient,
  setAmount,
  transferTokens,
} from './model';

export const TransferTokensDialog = reflect({
  view: Dialog,
  bind: {
    open: $transferModalIsOpen,
    onClose: () => resetRecipient(),
  },
});

export const AmountTextField = reflect({
  view: TextField,
  bind: {
    value: $amount,
    onChange: setAmount.prepend(textFieldOnChangePrependToNumber),
  },
});

export const CancelTransferTokensButton = reflect({
  view: Button,
  bind: {
    onClick: () => resetRecipient(),
  },
});

export const TransferTokensButton = reflect({
  view: Button,
  bind: {
    onClick: () => transferTokens(),
    disabled: $amount.map((amount) => amount <= 0),
  },
});
