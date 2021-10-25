import { createEvent, restore, guard, attach, forward } from 'effector';

import { DAPP_SCRIPT } from 'config';
import { Asset } from 'stores/assets/types';
import { invokeScriptWithFeeFx } from 'stores/keeper';

import { resetAssetToExchange } from '../ExchangeAsset/model';

export const selectAssetToReissue = createEvent<Asset>();
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
  filter: (source): source is [Asset, number] => {
    const [assetToReissue, quantity] = source;
    return assetToReissue !== null && quantity > 0;
  },
  target: attach<[Asset, number], typeof invokeScriptWithFeeFx>({
    effect: invokeScriptWithFeeFx,
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
