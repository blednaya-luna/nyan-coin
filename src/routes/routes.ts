import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

import { APP_LOCATION } from './constants';

const RootRedirect = lazy(() => import('components/RootRedirect'));
const Home = lazy(() => import('pages/home'));
const Assets = lazy(() => import('pages/assets'));
const Admin = lazy(() => import('pages/admin'));

export const routes: RouteConfig[] = [
  {
    path: APP_LOCATION.root,
    exact: true,
    component: RootRedirect,
  },
  {
    path: APP_LOCATION.home,
    component: Home,
  },
  {
    path: APP_LOCATION.assets,
    component: Assets,
  },
  {
    path: APP_LOCATION.admin,
    component: Admin,
  },
];
