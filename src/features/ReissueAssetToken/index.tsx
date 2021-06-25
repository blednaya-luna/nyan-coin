import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';

import {
  AssetIdTextField,
  QuantityTextField,
  ReissueAssetTokenButton,
} from './components';
import { useStyles } from './styles';

export const ReissueAssetToken: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Reissue asset token</Typography>
        </Grid>
        <Grid item>
          <ReissueAssetTokenButton label="Reissue" />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          {/* TODO select field */}
          <AssetIdTextField
            required
            label="AssetId"
            helperText="Enter assetId of asset token to be reissued"
          />
        </Grid>
        <Grid item>
          <QuantityTextField
            type="number"
            required
            label="Quantity"
            helperText="Enter quantity of asset tokens to be reissued"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
