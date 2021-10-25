import { Box, Grid, Link } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router';

import { AppBar } from 'containers/AppBar';
import { APP_LOCATION } from 'routes/constants';

const Home: FC = () => {
  const { push } = useHistory();

  return (
    <>
      <AppBar title="Home" />
      <Box p={2}>
        <Grid container direction="column" alignItems="flex-start" spacing={1}>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              color="inherit"
              onClick={() => push(APP_LOCATION.assets)}
            >
              Assets
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              color="inherit"
              onClick={() => push(APP_LOCATION.admin)}
            >
              Admin
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
