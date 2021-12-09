export const APP_LOCATION = {
  root: '/',
  assets: '/assets',
  admin: '/admin',
  user: {
    root: '/user/:address/',
    assets: '/user/:address/assets',
  },
} as const;
