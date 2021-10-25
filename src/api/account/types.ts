import { NYAN_TOKEN } from 'config';

export type RawAccountTokenBalance = {
  address: string;
  assetId: typeof NYAN_TOKEN;
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

export type RawAccountAssetBalance = {
  address: string;
  assetId: string;
  balance: number;
};
