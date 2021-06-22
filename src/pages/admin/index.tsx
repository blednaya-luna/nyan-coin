import React, { FC } from 'react';
import { Container, Grid } from '@material-ui/core';

import { AppBar } from 'components/AppBar';
import { SignInWithKeeper } from 'features/SignInWithKeeper';
import { IssueNyanToken } from 'features/IssueNyanToken';
import { ReissueNyanToken } from 'features/ReissueNyanToken';
import { TransferNyanToken } from 'features/TransferNyanToken';
import { IssueAssetToken } from 'features/IssueAssetToken';
import { ReissueAssetToken } from 'features/ReissueAssetToken';

import { useStyles } from './styles';

const Admin: FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar title="Admin panel" />
      <Container className={classes.root} maxWidth="sm">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <SignInWithKeeper />
          </Grid>
          <Grid item>
            <IssueNyanToken />
          </Grid>
          <Grid item>
            <ReissueNyanToken />
          </Grid>
          <Grid item>
            <TransferNyanToken />
          </Grid>
          <Grid item>
            <IssueAssetToken />
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
