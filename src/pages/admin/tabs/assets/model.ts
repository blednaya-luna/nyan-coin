import { createEffect, forward, restore } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

import { dAppAssetsBalance, dAppDataByPatter } from 'api/dApp';
import { RawDAppAssetsBalance } from 'api/dApp/types';
import { buildPattern } from 'api/utils';
import { DAPP_DATA } from 'config';

import { Asset } from './types';
import { parseAssets } from './utils';

export const AssetsGate = createGate();

export const fetchAssetsDataFx = createEffect<void, WavesKeeper.TStringData[]>(
  () => dAppDataByPatter(buildPattern(DAPP_DATA.asset.data)),
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

forward({
  from: AssetsGate.open,
  to: [fetchAssetsDataFx, fetchDAppAssetsBalanceFx],
});
