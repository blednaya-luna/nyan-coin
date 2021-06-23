import {
  RawAccountTokenBalanceItem,
  RawAccountAssetsBalanceItem,
  RawAccountAssetsBalance,
  RawAccountAssetBalanceItem,
} from 'api/account/types';

import { argType, dApp } from '../constants';

export type RawDAppDataItem = {
  key: string;
  type: keyof typeof argType;
  value: string;
};

export type RawDAppTokenBalanceItem = RawAccountTokenBalanceItem & {
  address: typeof dApp;
};

export type RawDAppAssetsBalanceItem = RawAccountAssetsBalanceItem;
export type RawDAppAssetsBalance = RawAccountAssetsBalance & {
  address: typeof dApp;
};

export type RawDAppAssetBalanceItem = RawAccountAssetBalanceItem & {
  address: typeof dApp;
};
