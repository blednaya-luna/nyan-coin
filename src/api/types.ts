export type RawDAppDataItem = {
  key: string;
  type: string;
  value: string;
};

export type RawAssetBalance = {
  balances: {
    assetId: string;
    balance: number;
  }[];
};
