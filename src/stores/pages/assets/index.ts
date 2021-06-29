import {
  combine,
  createEffect,
  createEvent,
  restore,
  attach,
  forward,
} from 'effector';
import { createGate } from 'effector-react';
import { debounce, combineEvents } from 'patronum';

import { dAppAssetsBalance, dAppDataByPatter } from 'api/dApp';
import { RawDAppDataItem, RawDAppAssetsBalance } from 'api/dApp/types';
import { buildPattern } from 'api/utils';
import { NYAN_TOKEN, DAPP_SCRIPT, DAPP_DATA } from 'config';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';

import { AssetItem } from './types';
import {
  parseAssetsData,
  parseAssetsBalance,
  parseAssets,
  filterAssetsByText,
} from './utils';

export const AssetsPageGate = createGate();

export const fetchAssetsDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(DAPP_DATA.asset.data)),
);

export const fetchDAppAssetsBalanceFx =
  createEffect<void, RawDAppAssetsBalance>(dAppAssetsBalance);

const assetsLoaded = combineEvents({
  events: {
    assetsData: fetchAssetsDataFx.doneData.map(parseAssetsData),
    assetsBalance: fetchDAppAssetsBalanceFx.doneData.map(parseAssetsBalance),
  },
}).map(parseAssets);

export const $assets = restore<AssetItem[]>(assetsLoaded, []);

export const setSearchFieldValue = createEvent<string>();
export const $searchFieldValue = restore(setSearchFieldValue, '');

export const setSearchQuery = debounce({
  source: setSearchFieldValue,
  timeout: 300,
});
export const $searchQuery = restore(setSearchQuery, '');

export const $filteredAssets = combine(
  {
    assets: $assets,
    searchQuery: $searchQuery,
  },
  filterAssetsByText,
);

export const selectAssetToExchange = createEvent<AssetItem>();
export const resetSelectedAssetToExchange = createEvent();
export const $selectedAssetToExchange = restore(
  selectAssetToExchange,
  null,
).reset(resetSelectedAssetToExchange);

export const exchangeAssetToken = createEvent<AssetItem>();
forward({
  from: exchangeAssetToken,
  to: attach<AssetItem, typeof callCallableFunctionWithFeeFx>({
    effect: callCallableFunctionWithFeeFx,
    mapParams: (asset) => ({
      func: DAPP_SCRIPT.EXCHANGE_ASSET,
      args: [
        {
          type: 'string',
          value: asset.assetId,
        },
        {
          type: 'integer',
          value: 1,
        },
      ],
      payment: [
        {
          assetId: NYAN_TOKEN,
          amount: asset.price,
        },
      ],
    }),
  }),
});
