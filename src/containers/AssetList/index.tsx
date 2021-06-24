import React, { FC } from 'react';
import { useList } from 'effector-react';
import { Grid } from '@material-ui/core';

import { $filteredAssets } from 'stores/pages/assets';
import { ExchangeAssetModal } from 'features/ExchangeAsset/ExchangeAssetModal';
import { selectAssetToExchange } from 'features/ExchangeAsset/model';

import { Asset } from '../../components/Asset';

export const AssetList: FC = () => {
  return (
    <>
      <Grid container justify="center">
        {useList($filteredAssets, (asset) => (
          <Grid item>
            <Asset {...asset} onClick={() => selectAssetToExchange(asset)} />
          </Grid>
        ))}
      </Grid>
      <ExchangeAssetModal />
    </>
  );
};
