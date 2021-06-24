import React, { FC } from 'react';
import { useStore } from 'effector-react';
import {
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { Button } from 'components/Button';
import { IconButton } from 'components/IconButton';
import {
  $selectedAssetToExchange,
  resetSelectedAssetToExchange,
  exchangeAssetToken,
} from 'stores/pages/assets';

import { Asset } from '../AssetItem';
import { useStyles } from './styles';

// TODO replace to use Dialog from components
export const ExchangeAssetModal: FC = () => {
  const selectedAsset = useStore($selectedAssetToExchange);
  const classes = useStyles();

  return selectedAsset ? (
    <Dialog open={true} onClose={() => resetSelectedAssetToExchange()}>
      <DialogTitle disableTypography>
        <Grid container justify="center">
          <Typography variant="h6">Confirm exchange</Typography>
          <IconButton
            className={classes.closeButton}
            Icon={Close}
            iconFontSize="default"
            onClick={() => resetSelectedAssetToExchange()}
          />
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Typography>{`Do you want to exchange ${selectedAsset.price} NT tokens for "${selectedAsset.name}"?`}</Typography>
        </Grid>
        <Grid className={classes.assetContainer} container justify="center">
          <Asset {...selectedAsset} disabled />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => resetSelectedAssetToExchange()}>Cancel</Button>
        <Button onClick={() => exchangeAssetToken(selectedAsset)}>
          Exchange
        </Button>
      </DialogActions>
    </Dialog>
  ) : null;
};
