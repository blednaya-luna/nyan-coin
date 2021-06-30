import { RawDAppAssetsBalance } from 'api/dApp/types';
import { extractValueFromKey } from 'api/utils';

import { Asset } from './types';

export const parseAssets = ({
  assetsData,
  assetsBalance,
}: {
  assetsData: WavesKeeper.TStringData[];
  assetsBalance: RawDAppAssetsBalance;
}) =>
  assetsData.map<Asset>((assetDataItem) => {
    const assetId = extractValueFromKey(assetDataItem.key);
    const data = JSON.parse(assetDataItem.value);
    const balance = assetsBalance.balances.find(
      (assetBalanceItem) => assetBalanceItem.assetId === assetId,
    );

    return {
      assetId,
      name: data.name,
      description: data.description,
      price: Number(data.price),
      balance: balance ? balance.balance : 0,
    };
  });

export const filterAssetsByText = ({
  assets,
  searchQuery,
}: {
  assets: Asset[];
  searchQuery: string;
}) => {
  const query = searchQuery.toLowerCase();
  return assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(query) ||
      asset.description.toLowerCase().includes(query),
  );
};