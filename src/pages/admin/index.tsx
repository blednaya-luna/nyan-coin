import { Container, Grid } from '@material-ui/core';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';
import { IssueNyanToken } from 'features/IssueNyanToken';
import { ReissueAssetToken } from 'features/ReissueAssetToken';
import { ReissueNyanToken } from 'features/ReissueNyanToken';

import { useStyles } from '../styles';

const Admin: FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar title="Admin panel" />
      <Container className={classes.root} maxWidth="sm">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <IssueNyanToken />
          </Grid>
          <Grid item>
            <ReissueNyanToken />
          </Grid>
          <Grid item>
            <ReissueAssetToken />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Admin;
