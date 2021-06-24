import { Box, Typography } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { Address } from 'components/Address';
import { Avatar } from 'components/Avatar';
import { IconButton } from 'components/IconButton';
import { Network } from 'components/Network';
import { UserBalance } from 'features/UserBalance';
import { $address, $email, $network } from 'stores/account';
import 'stores/account/init';

import { useStyles } from './styles';

export const UserAccount: FC = () => {
  const address = useStore($address);
  const email = useStore($email);
  const network = useStore($network);
  const classes = useStyles();

  return (
    <>
      {(address || network) && (
        <Box className={classes.leftBlock}>
          {address && <UserBalance address={address} fetchOnMount />}
          {network && <Network network={network} />}
        </Box>
      )}
      {address && <Avatar address={address} />}
      {(address || email) && (
        <Box className={classes.rightBlock}>
          {address && <Address address={address} />}
          {email && <Typography variant="caption">{email}</Typography>}
        </Box>
      )}
      <IconButton
        title="Sign out"
        size="medium"
        Icon={ExitToApp}
        iconFontSize="default"
        // TODO onClick
      />
    </>
  );
};
