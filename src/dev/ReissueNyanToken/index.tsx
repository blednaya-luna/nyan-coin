import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';

import { ReissueNyanTokenButton, QuantityTextField } from './components';
import { useStyles } from './styles';

export const ReissueNyanToken: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Reissue NYAN Token</Typography>
        </Grid>
        <Grid item>
          <ReissueNyanTokenButton label="Reissue" />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <QuantityTextField
            type="number"
            required
            label="quantity"
            helperText="Enter how many tokens need to be reissued"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
