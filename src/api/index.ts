import { baseURL, dApp, nyanCoin } from './constants';

export const dAppDataByPatter = (pattern: string) => {
  return fetch(`${baseURL}/addresses/data/${dApp}?matches=${pattern}`)
    .then((response) => response.json())
    .then((json) => json);
};

export const dAppAssetsBalance = () => {
  return fetch(`${baseURL}/assets/balance/${dApp}`)
    .then((response) => response.json())
    .then((json) => json);
};

type AccountAssetBalancePayload = {
  address: string;
  assetId?: string;
};

export const accountAssetBalance = ({
  address,
  assetId = nyanCoin,
}: AccountAssetBalancePayload) => {
  return fetch(`${baseURL}/assets/balance/${address}/${assetId}`)
    .then((response) => response.json())
    .then((json) => json);
};
