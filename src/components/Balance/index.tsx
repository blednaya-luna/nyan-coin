import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { useStyles } from './styles';

type BalanceProps = {
  balance: number | null;
  refreshBalance?: () => void;
};

export const Balance: FC<BalanceProps> = ({ balance, refreshBalance }) => {
  const classes = useStyles();
  const userBalance = balance ? `${balance} NT` : '0 NT';

  return (
    <Box className={classes.root}>
      <Typography variant="caption">{userBalance}</Typography>
      <IconButton size="small" color="inherit" onClick={refreshBalance}>
        <Refresh fontSize="small" />
      </IconButton>
    </Box>
  );
};
