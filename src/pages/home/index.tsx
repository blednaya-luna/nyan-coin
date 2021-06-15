import React, { FC } from 'react';
import { Container } from '@material-ui/core';

import { Account } from 'features/Account';
import { SignUp } from 'features/SignUp';
import { IssueNyanToken } from 'features/IssueNyanToken';
import { ReissueNyanToken } from 'features/ReissueNyanToken';
import { TransferNyanToken } from 'features/TransferNyanToken';
import { IssueAssetToken } from 'features/IssueAssetToken';
import { ReissueAssetToken } from 'features/ReissueAssetToken';
import { UserList } from 'features/UserList';
import { AssetList } from 'dev/AssetList';

import { useStyles } from './styles';

const Home: FC = () => {
  const classes = useStyles();

  return (
    <main>
      <section>
        <Account />
        <UserList />
        <Container className={classes.root} maxWidth="sm">
          <SignUp />
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
