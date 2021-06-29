import { createEvent, restore, guard, attach, forward } from 'effector';

import { DAPP_SCRIPT } from 'config';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { AssetItem } from 'stores/pages/assets/types';

import { resetAssetToExchange } from '../ExchangeAsset/model';

export const selectAssetToReissue = createEvent<AssetItem>();
export const resetAssetToReissue = createEvent();
export const $assetToReissue = restore(selectAssetToReissue, null).reset(
  resetAssetToReissue,
);

export const $reissueAssetModalIsOpen = $assetToReissue.map(Boolean);

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0).reset(resetAssetToReissue);

export const reissueAsset = createEvent();
export const reissueAssetFx = guard({
  clock: reissueAsset,
  source: [$assetToReissue, $quantity],
  filter: (source): source is [AssetItem, number] => {
    const [assetToReissue, quantity] = source;
    return assetToReissue !== null && quantity > 0;
  },
  target: attach<[AssetItem, number], typeof callCallableFunctionWithFeeFx>({
    effect: callCallableFunctionWithFeeFx,
    mapParams: ([assetToReissue, quantity]) => ({
      func: DAPP_SCRIPT.REISSUE_ASSET,
      args: [
        {
          type: 'string',
          value: assetToReissue.assetId,
        },
        {
          type: 'integer',
          value: quantity,
        },
      ],
    }),
  }),
});

forward({
  from: reissueAssetFx.done,
  to: resetAssetToExchange,
});
