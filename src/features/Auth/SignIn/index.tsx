import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { Box, Typography } from '@material-ui/core';

import { Dialog } from 'components/Dialog';
import { Button } from 'components/Button';
import { signInWithKeeper } from 'stores/keeper';

import { $signInModalIsOpen, toggleOpenSignInModal } from './model';
import { useStyles } from './styles';

export const SignIn: FC = () => {
  const signInModalIsOpen = useStore($signInModalIsOpen);
  const classes = useStyles();

  return (
    <Dialog
      open={signInModalIsOpen}
      onClose={toggleOpenSignInModal}
      title="Connect a wallet to get started"
      content={
        <Box className={classes.content}>
          <Box>
            <Button size="medium" fullWidth onClick={() => signInWithKeeper()}>
              Sign in with Keeper
            </Button>
            <Typography variant="body2" color="textSecondary">
              The network will be chosen in WavesKeeper by user
            </Typography>
          </Box>
          <Box>
            <Button size="medium" fullWidth disabled>
              Sign in with Exchange(Seed)
            </Button>
            <Typography variant="body2" color="textSecondary">
              Currently not supported
            </Typography>
          </Box>
          <Box>
            <Button size="medium" fullWidth disabled>
              Sign in with Exchange(Email)
            </Button>
            <Typography variant="body2" color="textSecondary">
              Currently not supported
            </Typography>
          </Box>
          <Box>
            <Button size="medium" fullWidth disabled>
              Sign in with seed
            </Button>
            <Typography variant="body2" color="textSecondary">
              Currently not supported
            </Typography>
          </Box>
        </Box>
      }
    />
  );
};
