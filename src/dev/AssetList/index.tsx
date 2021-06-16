import React, { FC } from 'react';
import { useList } from 'effector-react';
import { Grid } from '@material-ui/core';

import { $assets, selectAssetToExchange } from 'stores/pages/assets';

import { Asset } from './AssetItem';

export const AssetList: FC = () => {
  return (
    <Grid container justify="flex-start">
      {useList($assets, (asset) => (
        <Grid item>
          <Asset {...asset} onClick={() => selectAssetToExchange(asset)} />
        </Grid>
      ))}
    </Grid>
  );
};
