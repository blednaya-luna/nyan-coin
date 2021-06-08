import React, { FC } from 'react';
import { Grid, Divider, Typography, Paper } from '@material-ui/core';

import {
  AssetNameTextField,
  AssetDescriptionTextField,
  AssetQuantityTextField,
  AssetExchangePriceTextField,
  IssueAssetTokenButton,
} from './components';
import { useStyles } from './styles';

export const IssueAssetToken: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Issue asset token</Typography>
        </Grid>
        <Grid item>
          <IssueAssetTokenButton>Issue</IssueAssetTokenButton>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <AssetNameTextField
            required
            label="Name"
            helperText="Enter name of asset"
          />
        </Grid>
        <Grid item>
          <AssetDescriptionTextField
            required
            label="Description"
            helperText="Enter description of asset"
          />
        </Grid>
        <Grid item>
          <AssetQuantityTextField
            type="number"
            required
            label="Quantity"
            helperText="Enter quantity of asset"
          />
        </Grid>
        <Grid item>
          <AssetExchangePriceTextField
            type="number"
            required
            label="Exchange price"
            helperText="Enter exchange price of asset"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
