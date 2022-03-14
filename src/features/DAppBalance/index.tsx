import { Paper, Typography } from '@material-ui/core';
import { useGate } from 'effector-react';
import React from 'react';

import {
  DAppBalanceComponent,
  OpenReissueTokenModalButton,
} from './components';
import { IssueTokenModal } from './IssueTokenModal';
import { BalanceGate } from './model';
import { useStyles } from './styles';

export const DAppBalance = () => {
  useGate(BalanceGate);

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="overline">dApp balance: </Typography>
      <DAppBalanceComponent />
      <OpenReissueTokenModalButton label="Reissue token" />
      <IssueTokenModal />
    </Paper>
  );
};
