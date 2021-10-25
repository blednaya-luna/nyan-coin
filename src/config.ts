export const BASE_URL = 'https://nodes-testnet.wavesnodes.com';
export const EXPLORER_URL = 'https://testnet.wavesexplorer.com';
export const DAPP = '3ND7koq1CpoHCrLv833dEWPcC8ygda22q3n';
export const NYAN_TOKEN = 'AVfmaHcu4FD3poeJjGDMwnuhbzf5K7Q3pU9yhV2Y7Lpp';

export const DAPP_SCRIPT = {
  SIGN_UP: 'signUp',
  ISSUE_TOKEN: 'issueNyanToken',
  REISSUE_TOKEN: 'reissueNyanToken',
  TRANSFER_TOKEN: 'transferNyanToken',
  ISSUE_ASSET: 'issueAssetToken',
  REISSUE_ASSET: 'reissueAssetToken',
  EXCHANGE_ASSET: 'exchangeAssetToken',
} as const;

export const DAPP_DATA = {
  asset: {
    data: { scope: 'asset', key: 'data' },
    price: { scope: 'asset', key: 'price' },
  },
  dApp: {
    tokenId: { scope: 'dApp', key: 'tokenId', value: DAPP },
  },
  user: {
    email: { scope: 'user', key: 'email' },
  },
} as const;
