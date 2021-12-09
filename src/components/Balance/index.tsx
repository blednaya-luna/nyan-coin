import { Box, Typography, TypographyVariant } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';

import { useStyles } from './styles';

export type BalanceProps = {
  balance: number | null;
  refreshBalance?: () => void;
  type?: 'NT' | 'token';
  disabled?: boolean;
  variant?: TypographyVariant;
  disableTypography?: boolean;
};

export const Balance: FC<BalanceProps> = ({
  balance,
  refreshBalance,
  type = 'NT',
  disabled,
  variant = 'caption',
  disableTypography,
}) => {
  const classes = useStyles();
  const tokenBalance = balance ?? 0;
  const tokenType = type === 'NT' ? 'NT' : 'pcs.';
  const userBalance = `${tokenBalance} ${tokenType}`;

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
          disabled={disabled}
        />
      )}
    </Box>
  );
};
