import { baseURL, dApp, nyanCoin } from '../constants';
import { fetcher } from '../utils';
import {
  RawDAppDataItem,
  RawDAppTokenBalanceItem,
  RawDAppAssetsBalance,
  RawDAppAssetBalanceItem,
} from './types';

export const dAppDataByPatter = ({
  pattern,
}: {
  pattern: string;
}): Promise<RawDAppDataItem[]> =>
  fetcher(`${baseURL}/addresses/data/${dApp}?matches=${pattern}`);

export const dAppTokenBalance = (): Promise<RawDAppTokenBalanceItem> =>
  fetcher(`${baseURL}/assets/balance/${dApp}/${nyanCoin}`);

export const dAppAssetsBalance = (): Promise<RawDAppAssetsBalance> =>
  fetcher(`${baseURL}/assets/balance/${dApp}`);

export const dAppAssetBalance = ({
  assetId,
}: {
  assetId: string;
}): Promise<RawDAppAssetBalanceItem> =>
  fetcher(`${baseURL}/assets/balance/${dApp}/${assetId}`);
