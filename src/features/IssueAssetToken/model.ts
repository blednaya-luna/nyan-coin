import { attach, combine, createEvent, restore } from 'effector';

import { argType, dAppScript } from 'api/constants';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { calcFee } from 'utils/calcFee';

export const setAssetName = createEvent<string>();
export const $assetName = restore(setAssetName, '');

export const setAssetDescription = createEvent<string>();
export const $assetDescription = restore(setAssetDescription, '');

export const setAssetQuantity = createEvent<number>();
export const $assetQuantity = restore(setAssetQuantity, 0);

export const setAssetExchangePrice = createEvent<number>();
export const $assetExchangePrice = restore(setAssetExchangePrice, 0);

export const $assetData = combine({
  name: $assetName,
  description: $assetDescription,
  price: $assetExchangePrice,
});

export const issueAssetTokenFx = attach({
  effect: callCallableFunctionWithFeeFx,
  source: {
    assetName: $assetName,
    assetDescription: $assetDescription,
    assetQuantity: $assetQuantity,
    assetExchangePrice: $assetExchangePrice,
    assetData: $assetData.map((assetData) => JSON.stringify(assetData)),
  },
  mapParams: (
    _: void,
    {
      assetName,
      assetDescription,
      assetQuantity,
      assetExchangePrice,
      assetData,
    },
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
        value: assetData,
      },
    ],
    additionalFee: calcFee({ issue: true }),
  }),
});
