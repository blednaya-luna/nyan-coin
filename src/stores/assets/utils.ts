import { RawAccountAssetsBalance } from 'api/account/types';
import { extractValueFromKey } from 'api/utils';

import { AssetsGateProps } from '.';
import { Asset } from './types';

export const parseAssets = ({
  assetsData,
  assetsBalance,
}: {
  assetsData: WavesKeeper.TStringData[];
  assetsBalance: RawAccountAssetsBalance;
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

export const filterAssetsByEmptyBalance = ({
  assets,
  assetsGateProps: { withAssetsWithEmptyBalance },
}: {
  assets: Asset[];
  assetsGateProps: AssetsGateProps;
}) => {
  return assets.filter(
    (asset) => asset.balance === 0 && withAssetsWithEmptyBalance,
  );
};

const bySearchQuery = (searchQuery: string) => (asset: Asset) => {
  const query = searchQuery.toLowerCase();
  return (
    asset.name.toLowerCase().includes(query) ||
    asset.description.toLowerCase().includes(query)
  );
};

const byEmptyBalance =
  (withAssetsWithEmptyBalance: boolean) => (asset: Asset) => {
    return withAssetsWithEmptyBalance || asset.balance !== 0;
  };

export const filterAssets = ({
  assets,
  searchQuery,
  assetsGateProps: { withAssetsWithEmptyBalance },
}: {
  assets: Asset[];
  searchQuery: string;
  assetsGateProps: AssetsGateProps;
}) => {
  return assets
    .filter(byEmptyBalance(withAssetsWithEmptyBalance))
    .filter(bySearchQuery(searchQuery));
};
