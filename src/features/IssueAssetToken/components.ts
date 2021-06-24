import { reflect } from '@effector/reflect';
import { combine } from 'effector';

import { Button } from 'components/Button';
import {
  TextField,
  textFieldOnChangePrepend,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';
import { $isAuthorized } from 'stores/account';

import {
  $assetName,
  setAssetName,
  $assetDescription,
  setAssetDescription,
  $assetQuantity,
  setAssetQuantity,
  $assetExchangePrice,
  setAssetExchangePrice,
  issueAssetTokenFx,
} from './model';

export const IssueAssetTokenButton = reflect({
  view: Button,
  bind: {
    onClick: () => issueAssetTokenFx(),
    disabled: combine(
      [
        $isAuthorized,
        $assetName,
        $assetDescription,
        $assetQuantity,
        $assetExchangePrice,
      ],
      ([
        isAuthorized,
        assetName,
        assetDescription,
        assetQuantity,
        assetExchangePrice,
      ]) =>
        !isAuthorized ||
        assetName.length === 0 ||
        assetDescription.length === 0 ||
        assetQuantity < 0 ||
        assetExchangePrice < 1,
    ),
  },
});

export const AssetNameTextField = reflect({
  view: TextField,
  bind: {
    value: $assetName,
    onChange: setAssetName.prepend(textFieldOnChangePrepend),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});

export const AssetDescriptionTextField = reflect({
  view: TextField,
  bind: {
    value: $assetDescription,
    onChange: setAssetDescription.prepend(textFieldOnChangePrepend),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});

export const AssetQuantityTextField = reflect({
  view: TextField,
  bind: {
    value: $assetQuantity,
    onChange: setAssetQuantity.prepend(textFieldOnChangePrependToNumber),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});

export const AssetExchangePriceTextField = reflect({
  view: TextField,
  bind: {
    value: $assetExchangePrice,
    onChange: setAssetExchangePrice.prepend(textFieldOnChangePrependToNumber),
    disabled: $isAuthorized.map((isAuthorized) => !isAuthorized),
  },
});
