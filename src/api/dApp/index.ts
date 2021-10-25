import { DAPP, NYAN_TOKEN, BASE_URL } from 'config';

import { fetcher, buildKey, Match, buildMatches } from '../utils';

export const dAppDataByPatter = (matches: Match | Match[]) =>
  fetcher(
    `${BASE_URL}/addresses/data/${DAPP}?matches=${buildMatches(matches)}`,
  );

export const dAppDataByKey = (match: Required<Match>) =>
  fetcher(`${BASE_URL}/addresses/data/${DAPP}/${buildKey(match)}`);

export const dAppTokenBalance = () =>
  fetcher(`${BASE_URL}/assets/balance/${DAPP}/${NYAN_TOKEN}`);

export const dAppAssetsBalance = () =>
  fetcher(`${BASE_URL}/assets/balance/${DAPP}`);

export const dAppAssetBalance = ({ assetId }: { assetId: string }) =>
  fetcher(`${BASE_URL}/assets/balance/${DAPP}/${assetId}`);
