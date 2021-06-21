import React, { FC } from 'react';
import { useGate } from 'effector-react';
import { Box, Grid, Typography } from '@material-ui/core';

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
    <>
      <Box className={classes.root}>
        <Grid container direction="column">
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h6">Assets</Typography>
            <AssetsSearchField fullWidth={false} />
          </Grid>
          <AssetList />
        </Grid>
      </Box>
      <ExchangeAssetModal />
    </>
  );
};

export default Assets;
