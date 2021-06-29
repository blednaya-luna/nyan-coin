import {
  RawAccountTokenBalanceItem,
  RawAccountAssetsBalanceItem,
  RawAccountAssetsBalance,
  RawAccountAssetBalanceItem,
} from 'api/account/types';
import { DAPP } from 'config';

// TODO RawDAppDataItem is WavesKeeper.TTypedData
export type RawDAppDataItem = {
  key: string;
  type: 'integer' | 'boolean' | 'binary' | 'string';
  value: string;
};

export type RawDAppTokenBalanceItem = RawAccountTokenBalanceItem & {
  address: typeof DAPP;
};

export type RawDAppAssetsBalanceItem = RawAccountAssetsBalanceItem;
export type RawDAppAssetsBalance = RawAccountAssetsBalance & {
  address: typeof DAPP;
};

export type RawDAppAssetBalanceItem = RawAccountAssetBalanceItem & {
  address: typeof DAPP;
};
