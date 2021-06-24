import { attach, createEvent, forward, guard, restore } from 'effector';

import { AssetItem } from 'stores/pages/assets/types';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { argType, dAppScript, nyanCoin } from 'api/constants';

export const selectAssetToExchange = createEvent<AssetItem>();
export const resetAssetToExchange = createEvent();
export const $assetToExchange = restore(selectAssetToExchange, null).reset(
  resetAssetToExchange,
);

export const $exchangeModalIsOpen = $assetToExchange.map(Boolean);

export const setAmount = createEvent<number>();
export const $amount = restore(setAmount, 1).reset(resetAssetToExchange);

export const exchangeAsset = createEvent();

export const exchangeAssetFx = guard({
  clock: exchangeAsset,
  source: [$assetToExchange, $amount],
  filter: (source): source is [AssetItem, number] => {
    const [assetToExchange, amount] = source;
    return assetToExchange !== null && amount > 0;
  },
  target: attach<[AssetItem, number], typeof callCallableFunctionWithFeeFx>({
    effect: callCallableFunctionWithFeeFx,
    mapParams: ([assetToExchange, amount]) => ({
      func: dAppScript.exchangeAssetToken,
      args: [
        {
          type: argType.string,
          value: assetToExchange.assetId,
        },
        {
          type: argType.integer,
          value: amount,
        },
      ],
      payment: [
        {
          assetId: nyanCoin,
          amount: assetToExchange.price,
        },
      ],
    }),
  }),
});

forward({
  from: exchangeAssetFx.done,
  to: resetAssetToExchange,
});
