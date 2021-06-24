import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';

import { IssueNyanTokenButton, QuantityTextField } from './components';
import { useStyles } from './styles';

export const IssueNyanToken: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Issue NYAN Token</Typography>
        </Grid>
        <Grid item>
          <IssueNyanTokenButton>Issue</IssueNyanTokenButton>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <QuantityTextField
            type="number"
            required
            label="quantity"
            helperText="Enter how many tokens need to be issued"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
