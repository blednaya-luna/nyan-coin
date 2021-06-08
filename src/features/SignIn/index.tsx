import React, { FC } from 'react';
import { useStore } from 'effector-react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  IconButton,
  Container,
} from '@material-ui/core';
import { AccountCircle, Close } from '@material-ui/icons';

import { Button } from 'components/Button';

import {
  $signInModalIsOpen,
  closeSignInModal,
  openSignInModal,
  signInWithKeeper,
} from './model';
import { useStyles } from './styles';

export const SignIn: FC = () => {
  const signInModalIsOpen = useStore($signInModalIsOpen);
  const classes = useStyles();

  return (
    <>
      <Button endIcon={<AccountCircle />} onClick={openSignInModal}>
        Sign in
      </Button>
      <Dialog onClose={closeSignInModal} open={signInModalIsOpen}>
        <DialogTitle disableTypography>
          <Grid container justify="center">
            <Typography variant="h6">
              Connect a wallet to get started
            </Typography>
            <IconButton
              className={classes.closeButton}
              size="small"
              onClick={closeSignInModal}
            >
              <Close />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Container className={classes.dialogContentContainer} maxWidth="xs">
            <Grid container justify="center">
              <Button size="medium" fullWidth onClick={signInWithKeeper}>
                Sign in with Keeper
              </Button>
              <Typography variant="body2" color="textSecondary">
                The network will be chosen in WavesKeeper by user
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Button size="medium" fullWidth disabled>
                Sign in with Exchange(Seed)
              </Button>
              <Typography variant="body2" color="textSecondary">
                Currently not supported
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Button size="medium" fullWidth disabled>
                Sign in with Exchange(Email)
              </Button>
              <Typography variant="body2" color="textSecondary">
                Currently not supported
              </Typography>
            </Grid>
            <Grid container justify="center">
              <Button size="medium" fullWidth disabled>
                Sign in with seed
              </Button>
              <Typography variant="body2" color="textSecondary">
                Currently not supported
              </Typography>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};
