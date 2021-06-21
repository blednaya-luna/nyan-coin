import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Wifi } from '@material-ui/icons';

import { getNetwork } from 'utils/getNetwork';

type NetworkProps = {
  network: WavesKeeper.TPublicStateNetwork;
};

export const Network: FC<NetworkProps> = ({ network }) => {
  return (
    <Grid container alignItems="center" justify="flex-end">
      <Wifi color="disabled" fontSize="small" />
      <Typography variant="caption" color="textSecondary">
        {getNetwork(network.code)}
      </Typography>
    </Grid>
  );
};
