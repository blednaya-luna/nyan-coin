import { createEffect, restore, guard, createEvent, combine } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, debounce } from 'patronum';

import { dAppAssetsBalance, dAppDataByPatter } from 'api/dApp';
import { RawDAppAssetsBalance } from 'api/dApp/types';
import { DAPP_DATA } from 'config';

import { Asset } from './types';
import { parseAssets, filterAssetsByText } from './utils';

export const AssetsGate = createGate();

export const fetchAssetsDataFx = createEffect<void, WavesKeeper.TStringData[]>(
  () => dAppDataByPatter(DAPP_DATA.asset.data),
);

export const fetchDAppAssetsBalanceFx =
  createEffect<void, RawDAppAssetsBalance>(dAppAssetsBalance);

export const assetsLoaded = combineEvents({
  events: {
    assetsData: fetchAssetsDataFx.doneData,
    assetsBalance: fetchDAppAssetsBalanceFx.doneData,
  },
}).map(parseAssets);

export const $assets = restore<Asset[]>(assetsLoaded, []);

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

guard({
  source: $assets,
  clock: AssetsGate.open,
  filter: (asset) => asset.length === 0,
  target: [fetchAssetsDataFx, fetchDAppAssetsBalanceFx],
});
