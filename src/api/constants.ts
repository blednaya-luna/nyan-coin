export const baseURL =
  process.env.APP_NODE_URL || 'https://nodes-testnet.wavesnodes.com';

export const dApp = '3Mr5qPbeVKxVRjGMAumaEkSK7dMo3FbtFYE';
export const nyanCoin = '9kgnnfK7F5s9EBdV2gJVsCgZQHRVR5AnQef9uCdpQS4R';

export const dAppScopeKeys = {
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

export const argType = {
  integer: 'integer',
  boolean: 'boolean',
  binary: 'binary',
  string: 'string',
} as const;

export const dAppScript = {
  signUp: 'signUp',
  issueToken: 'issueNyanToken',
  reissueToken: 'reissueNyanToken',
  transferToken: 'transferNyanToken',
  issueAssetToken: 'issueAssetToken',
  reissueAssetToken: 'reissueAssetToken',
  exchangeAssetToken: 'exchangeAssetToken',
} as const;
