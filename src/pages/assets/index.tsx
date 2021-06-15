import React, { FC } from 'react';
import { useGate } from 'effector-react';
import { Grid } from '@material-ui/core';

import { AssetList } from 'dev/AssetList';
import { AssetsSearchField } from 'dev/AssetList/AssetsSearchField';
import { AssetsPageGate } from 'stores/pages/assets';
import 'stores/pages/assets/init';

import { useStyles } from './styles';

const Assets: FC = () => {
  useGate(AssetsPageGate);
  const classes = useStyles();

  return (
    <section>
      <Grid className={classes.root} container direction="column">
        <Grid container justify="flex-end">
          <AssetsSearchField fullWidth={false} />
        </Grid>
        <AssetList />
      </Grid>
    </section>
  );
};

export default Assets;
