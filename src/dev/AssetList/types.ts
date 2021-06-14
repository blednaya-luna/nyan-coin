export type AssetDataItem = {
  assetId: string;
  name: string;
  description: string;
  price: number;
};
export type RawAssetBalance = {
  balances: {
    assetId: string;
    balance: number;
  }[];
};
export type AssetBalanceItem = {
  assetId: string;
  balance: number;
};
export type AssetItem = AssetDataItem & AssetBalanceItem;
