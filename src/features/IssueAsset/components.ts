import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';
import {
  TextField,
  textFieldOnChangePrepend,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import {
  $assetName,
  setAssetName,
  $assetDescription,
  setAssetDescription,
  $assetQuantity,
  setAssetQuantity,
  $assetExchangePrice,
  setAssetExchangePrice,
  issueAsset,
  $issueAssetModalIsOpen,
  closeIssueAssetModal,
} from './model';

export const IssueAssetDialog = reflect({
  view: Dialog,
  bind: {
    open: $issueAssetModalIsOpen,
    onClose: closeIssueAssetModal,
  },
});

export const AssetNameTextField = reflect({
  view: TextField,
  bind: {
    value: $assetName,
    onChange: setAssetName.prepend(textFieldOnChangePrepend),
  },
});

export const AssetDescriptionTextField = reflect({
  view: TextField,
  bind: {
    value: $assetDescription,
    onChange: setAssetDescription.prepend(textFieldOnChangePrepend),
  },
});

export const AssetQuantityTextField = reflect({
  view: TextField,
  bind: {
    value: $assetQuantity,
    onChange: setAssetQuantity.prepend(textFieldOnChangePrependToNumber),
  },
});

export const AssetExchangePriceTextField = reflect({
  view: TextField,
  bind: {
    value: $assetExchangePrice,
    onChange: setAssetExchangePrice.prepend(textFieldOnChangePrependToNumber),
  },
});

export const IssueAssetButton = reflect({
  view: Button,
  bind: {
    onClick: () => issueAsset(),
  },
});

export const CancelIssueAssetButton = reflect({
  view: Button,
  bind: {
    onClick: () => closeIssueAssetModal(),
  },
});
