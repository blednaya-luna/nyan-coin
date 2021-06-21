import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { Account } from 'features/Account';
import { IssueNyanToken } from 'features/admin/IssueNyanToken';
import { ReissueNyanToken } from 'features/admin/ReissueNyanToken';
import { TransferNyanToken } from 'features/admin/TransferNyanToken';
import { IssueAssetToken } from 'features/admin/IssueAssetToken';
import { ReissueAssetToken } from 'features/admin/ReissueAssetToken';

import { useStyles } from './styles';

const Home: FC = () => {
  const classes = useStyles();

  return (
    <main>
      <section>
        <Account />
        <Container className={classes.root} maxWidth="sm">
          <IssueNyanToken />
          <ReissueNyanToken />
          <TransferNyanToken />
          <IssueAssetToken />
          <ReissueAssetToken />
        </Container>
      </section>
    </main>
  );
};

export default Home;
