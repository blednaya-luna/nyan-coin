import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { Wifi } from '@material-ui/icons';

import { getNetwork } from 'utils/getNetwork';

import { useStyles } from './styles';

type NetworkProps = {
  network: WavesKeeper.TPublicStateNetwork;
};

export const Network: FC<NetworkProps> = ({ network }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="caption">{getNetwork(network.code)}</Typography>
      <IconButton size="small" color="inherit" disabled>
        <Wifi fontSize="small" />
      </IconButton>
    </Box>
  );
};