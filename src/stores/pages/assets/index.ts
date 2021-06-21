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

import { dAppAssetsBalance, dAppDataByPatter } from 'api';
import { buildPattern } from 'api/utils';
import { dAppScopeKeys, dAppScript, nyanCoin } from 'api/constants';
import { RawDAppDataItem, RawAssetBalance } from 'api/types';
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
  dAppDataByPatter(buildPattern(dAppScopeKeys.asset.data)),
);

export const fetchDAppAssetsBalanceFx = createEffect<void, RawAssetBalance>(
  () => dAppAssetsBalance(),
);

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
      func: dAppScript.exchangeAssetToken,
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
          assetId: nyanCoin,
          amount: asset.price,
        },
      ],
    }),
  }),
});
