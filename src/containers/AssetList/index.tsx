import { Grid } from '@material-ui/core';
import { useList } from 'effector-react';
import React, { FC } from 'react';

import { Asset } from 'components/Asset';
import { ExchangeAsset } from 'features/ExchangeAsset';
import { $filteredAssets } from 'stores/pages/assets';

export const AssetList: FC = () => {
  return (
    <>
      <ExchangeAsset>
        {({ selectAssetToExchange }) => (
          <Grid container justify="center">
            {useList($filteredAssets, (asset) => (
              <Grid item>
                <Asset
                  {...asset}
                  onClick={() => selectAssetToExchange(asset)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </ExchangeAsset>
    </>
  );
};
