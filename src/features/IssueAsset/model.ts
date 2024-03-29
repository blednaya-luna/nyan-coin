import {
  attach,
  createEvent,
  forward,
  restore,
  createStore,
  sample,
} from 'effector';

import { DAPP_SCRIPT } from 'config';
import { invokeScriptWithFeeFx } from 'stores/keeper';
import { calcFee } from 'utils/calcFee';

export const openIssueAssetModal = createEvent();
export const closeIssueAssetModal = createEvent();
export const $issueAssetModalIsOpen = createStore(false)
  .on(openIssueAssetModal, () => true)
  .reset(closeIssueAssetModal);

export const setAssetName = createEvent<string>();
export const $assetName = restore(setAssetName, '').reset(closeIssueAssetModal); // max length is 16

export const setAssetDescription = createEvent<string>();
export const $assetDescription = restore(setAssetDescription, '').reset(
  closeIssueAssetModal,
);

export const setAssetQuantity = createEvent<number>();
export const $assetQuantity = restore(setAssetQuantity, 0).reset(
  closeIssueAssetModal,
);

export const setAssetExchangePrice = createEvent<number>();
export const $assetExchangePrice = restore(setAssetExchangePrice, 0).reset(
  closeIssueAssetModal,
);

export const issueAsset = createEvent();
export const issueAssetFx = sample({
  clock: issueAsset,
  target: attach<
    void,
    [
      typeof $assetName,
      typeof $assetDescription,
      typeof $assetQuantity,
      typeof $assetExchangePrice,
    ],
    typeof invokeScriptWithFeeFx
  >({
    effect: invokeScriptWithFeeFx,
    source: [
      $assetName,
      $assetDescription,
      $assetQuantity,
      $assetExchangePrice,
    ],
    mapParams: (
      _,
      [assetName, assetDescription, assetQuantity, assetExchangePrice],
    ) => ({
      func: DAPP_SCRIPT.ISSUE_ASSET,
      args: [
        {
          type: 'string',
          value: assetName,
        },
        {
          type: 'string',
          value: assetDescription,
        },
        {
          type: 'integer',
          value: assetQuantity,
        },
        {
          type: 'integer',
          value: assetExchangePrice,
        },
        {
          type: 'string',
          value: JSON.stringify({
            name: assetName,
            description: assetDescription,
            price: assetExchangePrice,
          }),
        },
      ],
      additionalFee: calcFee({ issue: true }),
    }),
  }),
});

forward({
  from: issueAssetFx.done,
  to: closeIssueAssetModal,
});
