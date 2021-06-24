import React, { FC, StrictMode, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CircularProgress } from 'components/CircularProgress';
import { ConnectWavesKeeper } from 'containers/ConnectWavesKeeper';
import { ThemeProvider } from 'containers/ThemeProvider';
import { routes } from 'routes/routes';

export const App: FC = () => {
  return (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<CircularProgress />}>
            <ConnectWavesKeeper>{renderRoutes(routes)}</ConnectWavesKeeper>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </StrictMode>
  );
};
