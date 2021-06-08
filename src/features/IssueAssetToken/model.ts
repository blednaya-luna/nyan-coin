import { attach, combine, createEvent, restore } from 'effector';

import { callCallableFunctionWithFeeFx } from 'stores/dApp';

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
    func: 'issueAssetToken',
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
        value: assetData,
      },
    ],
    additionalFee: 1,
  }),
});
