import { nyanCoin } from '../constants';

export type RawAccountTokenBalanceItem = {
  address: string;
  assetId: typeof nyanCoin;
  balance: number;
};

export type RawAccountAssetsBalanceItem = {
  assetId: string;
  balance: number;
  issueTransaction: unknown;
  minSponsoredAssetFee: unknown;
  quantity: number;
  reissuable: boolean;
  sponsorBalance: unknown;
};
export type RawAccountAssetsBalance = {
  address: string;
  balances: RawAccountAssetsBalanceItem[];
};

export type RawAccountAssetBalanceItem = {
  address: string;
  assetId: string;
  balance: number;
};
