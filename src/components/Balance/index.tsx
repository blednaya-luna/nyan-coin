import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { useStyles } from './styles';

export type BalanceProps = {
  balance: number | null;
  refreshBalance?: () => void;
  disableTypography?: boolean;
};

export const Balance: FC<BalanceProps> = ({
  balance,
  refreshBalance,
  disableTypography,
}) => {
  const classes = useStyles();
  const userBalance = balance ? `${balance} NT` : '0 NT';

  return (
    <Box className={classes.root}>
      {disableTypography ? (
        userBalance
      ) : (
        <Typography variant="caption">{userBalance}</Typography>
      )}
      <IconButton size="small" color="inherit" onClick={refreshBalance}>
        <Refresh fontSize="small" />
      </IconButton>
    </Box>
  );
};