import React, { FC, StrictMode, Suspense } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@material-ui/core';

import { routes } from './routes';

const history = createBrowserHistory();

export const App: FC = () => {
  return (
    <StrictMode>
      <ToastContainer />
      <Router history={history}>
        <Suspense fallback={<CircularProgress />}>
          {renderRoutes(routes)}
        </Suspense>
      </Router>
    </StrictMode>
  );
};
