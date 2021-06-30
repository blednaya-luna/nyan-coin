import { attach, createEvent, forward, guard, restore } from 'effector';

import { DAPP_SCRIPT, NYAN_TOKEN } from 'config';
import { Asset } from 'stores/assets/types';
import { invokeScriptWithFeeFx } from 'stores/keeper';

export const selectAssetToExchange = createEvent<Asset>();
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
  filter: (source): source is [Asset, number] => {
    const [assetToExchange, amount] = source;
    return assetToExchange !== null && amount > 0;
  },
  target: attach<[Asset, number], typeof invokeScriptWithFeeFx>({
    effect: invokeScriptWithFeeFx,
    mapParams: ([assetToExchange, amount]) => ({
      func: DAPP_SCRIPT.EXCHANGE_ASSET,
      args: [
        {
          type: 'string',
          value: assetToExchange.assetId,
        },
        {
          type: 'integer',
          value: amount,
        },
      ],
      payment: [
        {
          assetId: NYAN_TOKEN,
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
