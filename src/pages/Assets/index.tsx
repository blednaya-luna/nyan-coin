import { Grid } from '@material-ui/core';
import { useGate, useList } from 'effector-react';
import React, { FC } from 'react';

import { AssetTicket } from 'components/AssetTicket';
import { DAPP } from 'config';
import { AppBar } from 'containers/AppBar';
import {
  ExchangeAssetModal,
  selectAssetToExchange,
} from 'features/ExchangeAsset';
import { AssetsSearchField } from 'shared/AssetsSearchField';
import { AssetsGate, $filteredAssets } from 'stores/assets';

const Assets: FC = () => {
  useGate(AssetsGate, { address: DAPP, withAssetsWithEmptyBalance: false });

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
