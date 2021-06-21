import React, { FC } from 'react';
import { useStore, useGate } from 'effector-react';
import { Box, Grid, IconButton } from '@material-ui/core';
import { AccountCircle, ExitToApp } from '@material-ui/icons';

import { WavesKeeperGate } from 'stores/keeper';
import { $address, $email, $isAuthorized, $network } from 'stores/account';
import 'stores/keeper/init';
import 'stores/account/init';
import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { SignIn } from 'features/Auth/SignIn';
import { SignUp } from 'features/Auth/SignUp';
import { toggleOpenSignInModal } from 'features/Auth/SignIn/model';

import { Address } from './Address';
import { Email } from './Email';
import { Network } from './Network';
import { useStyles } from './styles';

export const Account: FC = () => {
  useGate(WavesKeeperGate);
  const isAuthorized = useStore($isAuthorized);
  const address = useStore($address);
  const network = useStore($network);
  const email = useStore($email);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid container alignItems="center" justify="flex-end" spacing={1}>
          {isAuthorized ? (
            <>
              <Grid item>
                {address && <Address address={address} />}
                {email && <Email email={email} />}
                {network && <Network network={network} />}
              </Grid>
              <Grid item>{address && <Avatar address={address} />}</Grid>
              <Grid item>
                <IconButton size="small">
                  <ExitToApp fontSize="small" />
                </IconButton>
              </Grid>
            </>
          ) : (
            <>
              <Grid item>
                <Button
                  endIcon={<AccountCircle />}
                  onClick={() => toggleOpenSignInModal()}
                >
                  Sign in
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      <SignIn />
      <SignUp />
    </>
  );
};
