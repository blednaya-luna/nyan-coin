import { DAPP, NYAN_TOKEN, BASE_URL } from 'config';

import { fetcher } from '../utils';

export const dAppDataByPatter = ({ pattern }: { pattern: string }) =>
  fetcher(`${BASE_URL}/addresses/data/${DAPP}?matches=${pattern}`);

export const dAppTokenBalance = () =>
  fetcher(`${BASE_URL}/assets/balance/${DAPP}/${NYAN_TOKEN}`);

export const dAppAssetsBalance = () =>
  fetcher(`${BASE_URL}/assets/balance/${DAPP}`);

export const dAppAssetBalance = ({ assetId }: { assetId: string }) =>
  fetcher(`${BASE_URL}/assets/balance/${DAPP}/${assetId}`);
