import React, { FC, StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CircularProgress } from 'components/CircularProgress';

import { routes } from './routes';

export const App: FC = () => {
  return (
    <StrictMode>
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
          {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
};
