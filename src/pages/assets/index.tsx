import React, { FC } from 'react';
import { useGate } from 'effector-react';
import { Box } from '@material-ui/core';

import { AppBar } from 'containers/AppBar';
import { AssetsSearchField } from 'containers/AssetsSearchField';
import { AssetList } from 'containers/AssetList';
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
