import { reflect } from '@effector/reflect';
import { Slide } from '@material-ui/core';

import { Balance } from 'components/Balance';
import { Button } from 'components/Button';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import {
  $reissueTokenViewIsOpen,
  $quantity,
  setQuantity,
  $dAppBalance,
  refreshDAppBalance,
  reissueTokenFx,
  openReissueTokenView,
} from './model';

export const DAppBalance = reflect({
  view: Balance,
  bind: {
    balance: $dAppBalance,
    refreshBalance: refreshDAppBalance,
  },
});

export const OpenReissueTokenViewButton = reflect({
  view: Button,
  bind: {
    onClick: () => openReissueTokenView(),
  },
});

export const ReissueTokenView = reflect({
  view: Slide,
  bind: {
    in: $reissueTokenViewIsOpen,
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
