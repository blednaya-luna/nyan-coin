import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { useList } from 'effector-react';

import { $assets } from 'stores/pages/assets';

import { AssetItem } from './AssetItem';

export const AssetList: FC = () => {
  return (
    <Grid container justify="flex-start">
      {useList($assets, ({ name, description, price }) => (
        <Grid item>
          <AssetItem name={name} description={description} price={price} />
        </Grid>
      ))}
    </Grid>
  );
};
