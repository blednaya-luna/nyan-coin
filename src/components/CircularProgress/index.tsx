import {
  Box,
  CircularProgress as MuiCircularProgress,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';

import { useStyles } from './styles';

export const CircularProgress: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MuiCircularProgress />
      <Typography className={classes.message}>Loading app...</Typography>
    </Box>
  );
};
