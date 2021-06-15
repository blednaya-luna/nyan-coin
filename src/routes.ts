import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Assets = lazy(() => import('pages/assets'));

export const routes = [
  {
    name: 'Home',
    path: '/home',
    component: Home,
  },
  {
    name: 'Assets',
    path: '/assets',
    component: Assets,
  },
];
