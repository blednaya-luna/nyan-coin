import { extractValueFromKey } from 'api/utils';
import { RawAssetBalance, RawDAppDataItem } from 'api/types';

import { AssetBalanceItem, AssetDataItem, AssetItem } from './types';

export const parseAssetsData = (assetsData: RawDAppDataItem[]) =>
  assetsData.map<AssetDataItem>((assetDataItem) => {
    const data = JSON.parse(assetDataItem.value);
    return {
      assetId: extractValueFromKey(assetDataItem.key),
      name: data.name,
      description: data.description,
      price: Number(data.price),
    };
  });

export const parseAssetsBalance = (assetsBalance: RawAssetBalance) =>
  assetsBalance.balances.map<AssetBalanceItem>((assetBalanceItem) => ({
    assetId: assetBalanceItem.assetId,
    balance: assetBalanceItem.balance,
  }));

export const parseAssets = ({
  assetsData,
  assetsBalance,
}: {
  assetsData: AssetDataItem[];
  assetsBalance: AssetBalanceItem[];
}) =>
  assetsData.reduce<AssetItem[]>((assets, assetDataItem) => {
    const assetBalanceItem = assetsBalance.find(
      (assetBalanceItem) => assetDataItem.assetId === assetBalanceItem.assetId,
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
  }, []);

export const filterAssetsByText = ({
  assets,
  searchQuery,
}: {
  assets: AssetItem[];
  searchQuery: string;
}) =>
  assets.filter(
    (asset) =>
      asset.name.includes(searchQuery) ||
      asset.description.includes(searchQuery),
  );
