import { Box, Typography } from '@material-ui/core';
import { Wifi } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';

import { useStyles } from './styles';

export const Network: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="caption">Testnet</Typography>
      <IconButton Icon={Wifi} disabled />
    </Box>
  );
};
