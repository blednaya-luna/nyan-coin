import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { useGate, useStore } from 'effector-react';

import { AssetItem } from './AssetItem';
import { AssetsSearchField } from './components';
import { AssetListGate, $assets } from './model';
import './init.model';
import { useStyles } from './styles';

export const AssetList: FC = () => {
  useGate(AssetListGate);
  const assets = useStore($assets);
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="column">
      <Grid container justify="flex-end">
        <AssetsSearchField fullWidth={false} />
      </Grid>
      <Grid container justify="flex-start">
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
    </Grid>
  );
};
