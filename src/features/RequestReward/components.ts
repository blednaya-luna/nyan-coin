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
  requestReward,
  $requestRewardModalIsOpen,
  resetAssetToRequestReward,
} from './model';

export const RequestRewardDialog = reflect({
  view: Dialog,
  bind: {
    open: $requestRewardModalIsOpen,
    onClose: resetAssetToRequestReward,
  },
});

export const AmountTextField = reflect({
  view: TextField,
  bind: {
    value: $amount,
    onChange: setAmount.prepend(textFieldOnChangePrependToNumber),
  },
});

export const CancelRequestRewardButton = reflect({
  view: Button,
  bind: {
    onClick: () => resetAssetToRequestReward(),
  },
});

export const RequestRewardButton = reflect({
  view: Button,
  bind: {
    onClick: () => requestReward(),
    disabled: $amount.map((amount) => amount <= 0),
  },
});
