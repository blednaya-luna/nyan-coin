import React, { FC } from 'react';
import { useGate } from 'effector-react';
import { Grid, Typography } from '@material-ui/core';

import { AssetsSearchField } from 'dev/AssetList/AssetsSearchField';
import { AssetList } from 'dev/AssetList';
import { ExchangeAssetModal } from 'dev/AssetList/ExchangeAssetModal';
import { AssetsPageGate } from 'stores/pages/assets';
import 'stores/pages/assets/init';

import { useStyles } from './styles';

const Assets: FC = () => {
  useGate(AssetsPageGate);
  const classes = useStyles();

  return (
    <section>
      <Grid className={classes.root} container direction="column">
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="h6">Assets</Typography>
          <AssetsSearchField fullWidth={false} />
        </Grid>
        <AssetList />
        <ExchangeAssetModal />
      </Grid>
    </section>
  );
};

export default Assets;
