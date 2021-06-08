import React, { FC } from 'react';
import { useStore, useGate } from 'effector-react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { ExitToApp, FileCopy, Wifi } from '@material-ui/icons';

import { WavesKeeperGate } from 'stores/keeper';
import { $address, $network, copyAddressToClipboardFx } from 'stores/account';
import { SignIn } from 'features/SignIn';
import { centerEllipsis } from 'utils/centerEllipsis';
import { getNetwork } from 'utils/getNetwork';
import { Avatar } from 'components/Avatar';

import { useStyles } from './styles';

export const Account: FC = () => {
  useGate(WavesKeeperGate);
  const address = useStore($address);
  const network = useStore($network);
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="flex-end"
    >
      {address && network ? (
        <>
          <Grid item>
            <Grid container alignItems="center" justify="flex-end">
              <Typography variant="caption">
                {centerEllipsis(address)}
              </Typography>
              <IconButton
                size="small"
                onClick={() => copyAddressToClipboardFx(address)}
              >
                <FileCopy fontSize="small" />
              </IconButton>
            </Grid>
            <Grid container alignItems="center" justify="flex-end">
              <Wifi
                className={classes.networkIcon}
                color="disabled"
                fontSize="small"
              />
              <Typography variant="caption" color="textSecondary">
                {getNetwork(network.code)}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Avatar address={address} />
          </Grid>
          <Grid item>
            <IconButton size="small">
              <ExitToApp fontSize="small" />
            </IconButton>
          </Grid>
        </>
      ) : (
        <SignIn />
      )}
    </Grid>
  );
};
