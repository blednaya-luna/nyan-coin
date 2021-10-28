import { Box, Typography, TypographyVariant } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';

import { useStyles } from './styles';

export type BalanceProps = {
  balance: number | null;
  refreshBalance?: () => void;
  variant?: TypographyVariant;
  disableTypography?: boolean;
};

export const Balance: FC<BalanceProps> = ({
  balance,
  refreshBalance,
  variant = 'caption',
  disableTypography,
}) => {
  const classes = useStyles();
  const userBalance = balance ? `${balance} NT` : '0 NT';

  return (
    <Box className={classes.root}>
      {disableTypography ? (
        userBalance
      ) : (
        <Typography variant={variant}>{userBalance}</Typography>
      )}
      {refreshBalance && (
        <IconButton
          className={classes.iconButton}
          title="Refresh balance"
          Icon={Refresh}
          onClick={refreshBalance}
        />
      )}
    </Box>
  );
};
