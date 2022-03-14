import { Paper, Typography } from '@material-ui/core';
import { AccountBalanceWallet } from '@material-ui/icons';
import { useGate } from 'effector-react';
import React from 'react';

import {
  DAppBalanceComponent,
  OpenReissueTokenModalButton,
} from './components';
import { BalanceGate } from './model';
import { ReissueTokenModal } from './ReissueTokenModal';
import { useStyles } from './styles';

export const DAppBalance = () => {
  useGate(BalanceGate);

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="overline">dApp balance: </Typography>
      <DAppBalanceComponent />
      <OpenReissueTokenModalButton
        label="Reissue token"
        startIcon={<AccountBalanceWallet />}
      />
      <ReissueTokenModal />
    </Paper>
  );
};
