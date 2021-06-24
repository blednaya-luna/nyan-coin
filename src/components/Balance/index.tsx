import React, { FC } from 'react';
import { Box, Tooltip, Typography } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import { IconButton } from 'components/IconButton';

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
      <Tooltip title="Refresh balance">
        <IconButton
          className={classes.iconButton}
          title="Refresh balance"
          Icon={Refresh}
          onClick={refreshBalance}
        />
      </Tooltip>
    </Box>
  );
};
