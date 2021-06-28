import { Box, Grid } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { Asset } from 'components/Asset';

import {
  AmountTextField,
  TransferTokensButton,
  ExchangeAssetDialog,
  CancelTransferTokensButton,
} from './components';
import { $assetToExchange } from './model';
import { useStyles } from './styles';

export const ExchangeAssetModal: FC = () => {
  const assetToExchange = useStore($assetToExchange);
  const classes = useStyles();

  return (
    <ExchangeAssetDialog
      title={`Exchange NYAN Tokens to asset "${assetToExchange?.name}"`}
      content={
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Box className={classes.assetContainer}>
              {assetToExchange && <Asset {...assetToExchange} />}
            </Box>
          </Grid>
          <Grid item>
            <AmountTextField
              label="amount"
              helperText="Enter how many tokens you want to exchange for NYAN Tokens"
              required
              autoFocus
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelTransferTokensButton
          key="cancel-exchange-asset"
          label="Cancel"
        />,
        <TransferTokensButton key="exchange-asset" label="Exchange" />,
      ]}
    />
  );
};
