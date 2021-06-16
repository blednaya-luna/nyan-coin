export const baseURL =
  process.env.APP_NODE_URL || 'https://nodes-testnet.wavesnodes.com';
export const chainId = 84;

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
};

export const argType = {
  string: 'string',
  integer: 'integer',
} as const;
