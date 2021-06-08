import React, { FC } from 'react';
import { Grid, Box } from '@material-ui/core';
import { useGate, useStore } from 'effector-react';

import { AssetItem } from './AssetItem';
import { AssetListGate, $assets } from './model';
import { useStyles } from './styles';

export const AssetList: FC = () => {
  useGate(AssetListGate);
  const assets = useStore($assets);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container justify="center">
        {assets.map((asset) => (
          <Grid key={asset.assetId} item>
            <AssetItem
              name={asset.name}
              description={asset.description}
              price={asset.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
