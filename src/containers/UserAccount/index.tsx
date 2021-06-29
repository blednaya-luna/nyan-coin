import { Box, Typography } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { Address } from 'components/Address';
import { Avatar } from 'components/Avatar';
import { Network } from 'components/Network';
import { UserBalance } from 'features/UserBalance';
import { $address, $email } from 'stores/account';
import 'stores/account/init';

import { useStyles } from './styles';

export const UserAccount: FC = () => {
  const address = useStore($address);
  const email = useStore($email);
  const classes = useStyles();

  return (
    <>
      {address && (
        <Box className={classes.leftBlock}>
          {address && <UserBalance address={address} fetchOnMount />}
          <Network />
        </Box>
      )}
      {address && <Avatar address={address} />}
      {(address || email) && (
        <Box className={classes.rightBlock}>
          {address && (
            <Address address={address} scope="address" type="assets" />
          )}
          {email && <Typography variant="caption">{email}</Typography>}
        </Box>
      )}
    </>
  );
};
