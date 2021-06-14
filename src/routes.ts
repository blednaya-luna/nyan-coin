import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Assets = lazy(() => import('pages/assets'));

export const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/assets',
    component: Assets,
  },
];
