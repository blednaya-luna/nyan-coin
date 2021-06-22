import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { Container, Grid, Link, Typography } from '@material-ui/core';

import { APP_LOCATION } from 'routes/constants';
import { Account } from 'features/Account';

const Home: FC = () => {
  const { push } = useHistory();

  return (
    <>
      <Account />
      <Container maxWidth="sm">
        <Grid container direction="column" alignItems="flex-start" spacing={1}>
          <Grid item>
            <Typography variant="body2">Home page</Typography>
          </Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                push(APP_LOCATION.assets);
              }}
            >
              Assets
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                push(APP_LOCATION.users);
              }}
            >
              Registered users
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                push(APP_LOCATION.admin);
              }}
            >
              Admin
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
