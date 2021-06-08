import React, { FC } from 'react';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';

import {
  TransferNyanTokenButton,
  RecipientTextField,
  AmountTextField,
} from './components';
import { useStyles } from './styles';

export const TransferNyanToken: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Transfer NYAN Token</Typography>
        </Grid>
        <Grid item>
          <TransferNyanTokenButton>Transfer</TransferNyanTokenButton>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          {/* TODO select field */}
          <RecipientTextField
            required
            label="recipient"
            helperText="Enter the recipient address"
          />
        </Grid>
        <Grid item>
          <AmountTextField
            type="number"
            required
            label="amount"
            helperText="Enter how many tokens need to be transferred"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
