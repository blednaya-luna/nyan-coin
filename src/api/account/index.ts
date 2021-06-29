import { BASE_URL, NYAN_TOKEN } from 'config';

import { fetcher } from '../utils';

export const accountTokenBalance = ({ address }: { address: string }) =>
  fetcher(`${BASE_URL}/assets/balance/${address}/${NYAN_TOKEN}`);

export const accountAssetsBalance = ({ address }: { address: string }) =>
  fetcher(`${BASE_URL}/assets/balance/${address}`);

export const accountAssetBalance = ({
  address,
  assetId,
}: {
  address: string;
  assetId: string;
}) => fetcher(`${BASE_URL}/assets/balance/${address}/${assetId}`);
