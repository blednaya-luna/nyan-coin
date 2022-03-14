import { reflect } from '@effector/reflect';

import { Balance } from 'components/Balance';
import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import {
  $reissueTokenModalIsOpen,
  $quantity,
  setQuantity,
  $dAppBalance,
  refreshDAppBalance,
  reissueTokenFx,
  openReissueTokenModal,
  closeReissueTokenModal,
} from './model';

export const DAppBalanceComponent = reflect({
  view: Balance,
  bind: {
    balance: $dAppBalance,
    refreshBalance: refreshDAppBalance,
  },
});

export const OpenReissueTokenModalButton = reflect({
  view: Button,
  bind: {
    onClick: () => openReissueTokenModal(),
  },
});

export const ReissueTokenDialog = reflect({
  view: Dialog,
  bind: {
    open: $reissueTokenModalIsOpen,
    onClose: closeReissueTokenModal,
  },
});

export const QuantityTextField = reflect({
  view: TextField,
  bind: {
    value: $quantity,
    onChange: setQuantity.prepend(textFieldOnChangePrependToNumber),
  },
});

export const ReissueTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => reissueTokenFx(),
    disabled: $quantity.map((quantity) => quantity <= 0),
  },
});

export const CancelReissueTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => closeReissueTokenModal(),
  },
});
