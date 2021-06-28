import {
  attach,
  createEvent,
  forward,
  restore,
  createStore,
  sample,
} from 'effector';

import { argType, dAppScript } from 'api/constants';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { calcFee } from 'utils/calcFee';

export const openIssueAssetModal = createEvent();
export const closeIssueAssetModal = createEvent();
export const $issueAssetModalIsOpen = createStore(false)
  .on(openIssueAssetModal, () => true)
  .on(closeIssueAssetModal, () => false);

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
  target: attach({
    effect: callCallableFunctionWithFeeFx,
    source: [
      $assetName,
      $assetDescription,
      $assetQuantity,
      $assetExchangePrice,
    ],
    mapParams: (
      params,
      [assetName, assetDescription, assetQuantity, assetExchangePrice],
    ) => ({
      func: dAppScript.issueAssetToken,
      args: [
        {
          type: argType.string,
          value: assetName,
        },
        {
          type: argType.string,
          value: assetDescription,
        },
        {
          type: argType.integer,
          value: assetQuantity,
        },
        {
          type: argType.integer,
          value: assetExchangePrice,
        },
        {
          type: argType.string,
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
