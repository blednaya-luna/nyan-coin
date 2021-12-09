import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

import { APP_LOCATION } from './constants';

const RootRedirect = lazy(() => import('components/RootRedirect'));
const Assets = lazy(() => import('pages/Assets'));
const Admin = lazy(() => import('pages/Admin'));
const User = lazy(() => import('pages/User'));

export const routes: RouteConfig[] = [
  {
    path: APP_LOCATION.root,
    exact: true,
    component: RootRedirect,
  },
  {
    path: APP_LOCATION.assets,
    exact: true,
    component: Assets,
  },
  {
    path: APP_LOCATION.user.root,
    exact: true,
    component: User,
  },
  {
    path: APP_LOCATION.admin,
    exact: true,
    component: Admin,
  },
];

export { APP_LOCATION };
