import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Assets = lazy(() => import('pages/assets'));
const Admin = lazy(() => import('pages/admin'));

export const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/assets',
    component: Assets,
  },
  {
    path: '/admin',
    component: Admin,
  },
];
