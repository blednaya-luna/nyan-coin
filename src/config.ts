export const BASE_URL = 'https://nodes-testnet.wavesnodes.com';
export const EXPLORER_URL = 'https://testnet.wavesexplorer.com';
export const DAPP = '3Mr5qPbeVKxVRjGMAumaEkSK7dMo3FbtFYE';
export const NYAN_TOKEN = '9kgnnfK7F5s9EBdV2gJVsCgZQHRVR5AnQef9uCdpQS4R';

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
    tokenId: { scope: 'dApp', key: 'tokenId' },
  },
  user: {
    email: { scope: 'user', key: 'email' },
  },
} as const;
