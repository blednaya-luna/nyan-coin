import {
  RawAccountTokenBalance,
  RawAccountAssetsBalanceItem,
  RawAccountAssetsBalance,
  RawAccountAssetBalance,
} from 'api/account/types';
import { DAPP } from 'config';

export type RawDAppTokenBalance = RawAccountTokenBalance & {
  address: typeof DAPP;
};

export type RawDAppAssetsBalanceItem = RawAccountAssetsBalanceItem;
export type RawDAppAssetsBalance = RawAccountAssetsBalance & {
  address: typeof DAPP;
};

export type RawDAppAssetBalance = RawAccountAssetBalance & {
  address: typeof DAPP;
};
