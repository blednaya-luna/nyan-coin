import { Box } from '@material-ui/core';
import { useGate } from 'effector-react';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';
import { AssetList } from 'containers/AssetList';
import { AssetsSearchField } from 'containers/AssetsSearchField';
import { AssetsPageGate } from 'stores/pages/assets';
import 'stores/pages/assets/init';

import { useStyles } from '../styles';

const Assets: FC = () => {
  useGate(AssetsPageGate);
  const classes = useStyles();

  return (
    <>
      <AppBar title="Assets" searchComponent={<AssetsSearchField />} />
      <Box className={classes.root}>
        <AssetList />
      </Box>
    </>
  );
};

export default Assets;
