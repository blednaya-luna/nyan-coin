import { attach, createEvent, restore } from 'effector';

import { argType, dAppScript } from 'api/constants';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const setAssetId = createEvent<string>();
export const $assetId = restore(setAssetId, '');

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0);

export const reissueAssetTokenFx = attach({
  effect: callCallableFunctionWithFeeFx,
  source: {
    assetId: $assetId,
    quantity: $quantity,
  },
  mapParams: (_: void, { quantity, assetId }) => ({
    func: dAppScript.reissueAssetToken,
    args: [
      {
        type: argType.string,
        value: assetId,
      },
      {
        type: argType.integer,
        value: quantity,
      },
    ],
  }),
});
