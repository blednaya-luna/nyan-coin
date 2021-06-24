import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { Box } from '@material-ui/core';

import { Dialog } from 'components/Dialog';
import { Button } from 'components/Button';
import { Asset } from 'components/Asset';

import {
  $exchangeModalIsOpen,
  $assetToExchange,
  resetAssetToExchange,
} from './model';
import { AmountTextField, TransferTokensButton } from './components';
import { useStyles } from './styles';

export const ExchangeAssetModal: FC = () => {
  const exchangeModalIsOpen = useStore($exchangeModalIsOpen);
  const assetToExchange = useStore($assetToExchange);
  const classes = useStyles();

  return (
    <Dialog
      open={exchangeModalIsOpen}
      onClose={resetAssetToExchange}
      title={`Exchange NYAN Tokens to asset "${assetToExchange?.name}"`}
      content={
        <Box className={classes.content}>
          <Box className={classes.assetContainer}>
            {assetToExchange && <Asset {...assetToExchange} />}
          </Box>
          <AmountTextField
            label="amount"
            helperText="Enter how many tokens you want to exchange for NYAN Tokens"
            required
            fullWidth={false}
            autoFocus
          />
        </Box>
      }
      actions={
        <>
          <Button onClick={() => resetAssetToExchange()}>Cancel</Button>
          <TransferTokensButton>Exchange</TransferTokensButton>
        </>
      }
    />
  );
};
