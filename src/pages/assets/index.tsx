import { Grid } from '@material-ui/core';
import { useGate, useList } from 'effector-react';
import React, { FC } from 'react';

import { AssetTicket } from 'components/AssetTicket';
import { AppBar } from 'containers/AppBar';
import {
  ExchangeAssetModal,
  selectAssetToExchange,
} from 'features/ExchangeAsset';
import { AssetsGate, $filteredAssets } from 'stores/assets';

import { AssetsSearchField } from './components';

const Assets: FC = () => {
  useGate(AssetsGate);

  return (
    <>
      <AppBar title="Assets" searchComponent={<AssetsSearchField />} />
      <Grid container justify="center">
        {useList($filteredAssets, (asset) => (
          <Grid item>
            <AssetTicket
              asset={asset}
              onClick={() => selectAssetToExchange(asset)}
            />
          </Grid>
        ))}
      </Grid>
      <ExchangeAssetModal />
    </>
  );
};

export default Assets;
