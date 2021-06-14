import React, { FC } from 'react';
import { useGate, useStoreMap } from 'effector-react';
import { IconButton, Typography, Box } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { UserBalanceGate, loadUserBalance, $userBalances } from './model';
import { UserBalanceProps } from './types';
import { useStyles } from './styles';

export const UserBalance: FC<UserBalanceProps> = ({
  address,
  fetchOnMount = false,
}) => {
  useGate<Required<UserBalanceProps>>(UserBalanceGate, {
    address,
    fetchOnMount,
  });
  const balance = useStoreMap({
    store: $userBalances,
    keys: [address],
    fn: (userBalances, [address]) => userBalances[address] || null,
  });
  const userBalance = balance ? `${balance} NT` : '? NT';
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="body2" color="primary">
        {userBalance}
      </Typography>
      <IconButton size="small" onClick={loadUserBalance}>
        <Refresh fontSize="small" />
      </IconButton>
    </Box>
  );
};
