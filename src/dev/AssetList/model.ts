import {
  combine,
  createEffect,
  createStore,
  createEvent,
  restore,
} from 'effector';
import { createGate } from 'effector-react';

import { dAppAssetsBalance, dAppDataByPatter } from 'api';
import { RawDAppDataItem } from 'api/types';
import { buildPattern, extractValueFromKey } from 'api/utils';
import { dAppScopeKeys } from 'api/constants';

import {
  AssetBalanceItem,
  AssetDataItem,
  AssetItem,
  RawAssetBalance,
} from './types';

export const AssetListGate = createGate();

export const fetchAssetsDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(dAppScopeKeys.asset.data)),
);

const $assetsData = createStore<AssetDataItem[]>([]).on(
  fetchAssetsDataFx.doneData,
  (_, response) =>
    response.reduce<AssetDataItem[]>((assetData, assetDataItem) => {
      const data = JSON.parse(assetDataItem.value);
      return [
        ...assetData,
        {
          assetId: extractValueFromKey(assetDataItem.key),
          name: data.name,
          description: data.description,
          price: Number(data.price),
        },
      ];
    }, []),
);

export const fetchDAppAssetsBalanceFx = createEffect<void, RawAssetBalance>(
  () => dAppAssetsBalance(),
);

const $assetsBalance = createStore<AssetBalanceItem[]>([]).on(
  fetchDAppAssetsBalanceFx.doneData,
  (_, response) =>
    response.balances.map((assetBalanceItem) => ({
      assetId: assetBalanceItem.assetId,
      balance: assetBalanceItem.balance,
    })),
);

export const $assets = combine(
  [$assetsData, $assetsBalance],
  ([assetsData, assetsBalance]) =>
    assetsData.reduce<AssetItem[]>((assets, assetDataItem) => {
      const assetBalanceItem = assetsBalance.find(
        (assetBalanceItem) =>
          assetDataItem.assetId === assetBalanceItem.assetId,
      );
      return assetBalanceItem
        ? [
            ...assets,
            {
              ...assetDataItem,
              ...assetBalanceItem,
            },
          ]
        : assets;
    }, []),
);

export const setSearchQuery = createEvent<string>();
export const $searchQuery = restore(setSearchQuery, '');
