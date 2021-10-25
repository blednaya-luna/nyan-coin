import {
  createEffect,
  restore,
  guard,
  createEvent,
  combine,
  attach,
} from 'effector';
import { createGate } from 'effector-react';
import { combineEvents, debounce } from 'patronum';

import { accountAssetsBalance } from 'api/account';
import { RawAccountAssetsBalance } from 'api/account/types';
import { dAppDataByPatter } from 'api/dApp';
import { DAPP_DATA } from 'config';

import { Asset } from './types';
import { parseAssets, filterAssets } from './utils';

export type AssetsGateProps = {
  address: string;
  withAssetsWithEmptyBalance: boolean;
};

export const AssetsGate = createGate<AssetsGateProps>();

export const fetchAssetsDataFx = createEffect<void, WavesKeeper.TStringData[]>(
  () => dAppDataByPatter(DAPP_DATA.asset.data),
);

const fetchAssetsBalanceFx = attach({
  effect:
    createEffect<AssetsGateProps, RawAccountAssetsBalance>(
      accountAssetsBalance,
    ),
  source: AssetsGate.state,
});

export const assetsLoaded = combineEvents({
  events: {
    assetsData: fetchAssetsDataFx.doneData,
    assetsBalance: fetchAssetsBalanceFx.doneData,
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
    assetsGateProps: AssetsGate.state,
  },
  filterAssets,
);

guard({
  source: $assets,
  clock: AssetsGate.open,
  filter: (assets) => assets.length === 0,
  target: [fetchAssetsDataFx, fetchAssetsBalanceFx],
});
