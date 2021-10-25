import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';
import {
  TextField,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import {
  $reissueAssetModalIsOpen,
  resetAssetToReissue,
  $quantity,
  setQuantity,
  reissueAsset,
} from './model';

export const ReissueAssetDialog = reflect({
  view: Dialog,
  bind: {
    open: $reissueAssetModalIsOpen,
    onClose: resetAssetToReissue,
  },
});

export const QuantityTextField = reflect({
  view: TextField,
  bind: {
    value: $quantity,
    onChange: setQuantity.prepend(textFieldOnChangePrependToNumber),
  },
});

export const CancelReissueAssetButton = reflect({
  view: Button,
  bind: {
    onClick: () => resetAssetToReissue(),
  },
});

export const ReissueAssetButton = reflect({
  view: Button,
  bind: {
    onClick: () => reissueAsset(),
    disabled: $quantity.map((quantity) => quantity <= 0),
  },
});
