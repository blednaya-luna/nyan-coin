import { Grid } from '@material-ui/core';
import { useGate, useList } from 'effector-react';
import React from 'react';
import { useParams } from 'react-router';

import { AssetTicket } from 'components/AssetTicket';
import { AppBar } from 'containers/AppBar';
import { AssetsSearchField } from 'shared/AssetsSearchField';
import { $filteredAssets, AssetsGate } from 'stores/assets';

export const MyAssets = () => {
  const { address } = useParams<{ address: string }>();
  useGate(AssetsGate, { address, withAssetsWithEmptyBalance: false });

  return (
    <>
      <AppBar title="My assets" searchComponent={<AssetsSearchField />} />
      <Grid container justify="center">
        {useList($filteredAssets, (asset) => (
          <Grid item>
            <AssetTicket asset={asset} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyAssets;
