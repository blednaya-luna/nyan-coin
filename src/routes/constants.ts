export const APP_LOCATION = {
  root: '/',
  home: '/home',
  assets: '/assets',
  admin: '/admin',
  user: {
    root: '/user/:address/',
    assets: '/user/:address/assets',
  },
} as const;
