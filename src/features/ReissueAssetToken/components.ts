import { combine } from 'effector';
import { reflect } from '@effector/reflect';

import {
  TextField,
  textFieldOnChangePrepend,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { Button } from 'components/Button';
import { $isAuthorized } from 'stores/account';

import {
  $assetId,
  setAssetId,
  $quantity,
  setQuantity,
  reissueAssetTokenFx,
} from './model';

export const ReissueAssetTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => reissueAssetTokenFx(),
    disabled: combine(
      [$isAuthorized, $assetId, $quantity],
      ([isAuthorized, assetId, quantity]) =>
        !isAuthorized || assetId.length === 0 || quantity < 1,
    ),
  },
});

export const AssetIdTextField = reflect({
  view: TextField,
  bind: {
    value: $assetId,
    onChange: setAssetId.prepend(textFieldOnChangePrepend),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
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
