import { baseURL, nyanCoin } from '../constants';
import { fetcher } from '../utils';
import { RawAccountTokenBalanceItem } from './types';

export const accountTokenBalance = ({
  address,
}: {
  address: string;
}): Promise<RawAccountTokenBalanceItem> =>
  fetcher(`${baseURL}/assets/balance/${address}/${nyanCoin}`);

export const accountAssetsBalance = ({ address }: { address: string }) =>
  fetcher(`${baseURL}/assets/balance/${address}`);

export const accountAssetBalance = ({
  address,
  assetId,
}: {
  address: string;
  assetId: string;
}) => fetcher(`${baseURL}/assets/balance/${address}/${assetId}`);
