import { createEffect, forward, createStore, combine } from 'effector';
import { createGate } from 'effector-react';

import { dAppDataByPatter, dAppAssetsBalance } from 'api';
import { dAppScopeKeys } from 'api/constants';
import { buildPattern, extractValueFromKey } from 'api/utils';
import { RawDAppDataItem } from 'api/types';

export const AssetListGate = createGate();

type AssetDataItem = {
  assetId: string;
  name: string;
  description: string;
  price: number;
};

const fetchAssetsDataFx = createEffect<void, RawDAppDataItem[]>(() =>
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

type RawAssetBalance = {
  balances: {
    assetId: string;
    balance: number;
  }[];
};

type AssetBalanceItem = {
  assetId: string;
  balance: number;
};

const fetchDAppAssetsBalanceFx = createEffect<void, RawAssetBalance>(() =>
  dAppAssetsBalance(),
);

const $assetsBalance = createStore<AssetBalanceItem[]>([]).on(
  fetchDAppAssetsBalanceFx.doneData,
  (_, response) =>
    response.balances.map((assetBalanceItem) => ({
      assetId: assetBalanceItem.assetId,
      balance: assetBalanceItem.balance,
    })),
);

type AssetItem = AssetDataItem & AssetBalanceItem;

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

forward({
  from: AssetListGate.open,
  to: fetchAssetsDataFx,
});

forward({
  from: AssetListGate.open,
  to: fetchDAppAssetsBalanceFx,
});
