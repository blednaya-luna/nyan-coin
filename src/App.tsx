import React, { FC, StrictMode, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@material-ui/core';

import { Navigation } from 'components/Navigation';
import { RouteComponents } from 'components/Navigation/RouteComponents';

// const history = createBrowserHistory();

export const App: FC = () => {
  return (
    <StrictMode>
      <ToastContainer />
      <Router>
        <Navigation />
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <RouteComponents />
          </Switch>
        </Suspense>
      </Router>
    </StrictMode>
  );
};
