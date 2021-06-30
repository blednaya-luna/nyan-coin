import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';

import { Address } from 'components/Address';
import { Avatar } from 'components/Avatar';
import { Balance } from 'components/Balance';
import { User } from 'stores/users/types';

import { useStyles } from './styles';

type UserAccountProps = {
  user: User;
};

export const UserAccount: FC<UserAccountProps> = ({ user }) => {
  const { address, email, balance } = user;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.block}>
        {/* TODO add refresh balance */}
        <Balance balance={balance} />
      </Box>
      <Avatar address={address} />
      <Box className={classes.block}>
        <Address address={address} scope="address" type="assets" />
        <Typography variant="caption">{email}</Typography>
      </Box>
    </Box>
  );
};
