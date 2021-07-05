import { Grid } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import {
  AmountTextField,
  TransferTokensButton,
  TransferTokensDialog,
  CancelTransferTokensButton,
} from './components';
import { $recipient } from './model';

export const TransferTokensModal: FC = () => {
  const recipient = useStore($recipient);

  return (
    <TransferTokensDialog
      title={`Transfer NYAN Token to ${recipient?.email}`}
      content={
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <AmountTextField
              type="number"
              label="amount"
              helperText="Enter how many tokens need to be transferred"
              required
              autoFocus
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelTransferTokensButton
          key="cancel-transfer-tokens"
          label="Cancel"
        />,
        <TransferTokensButton key="transfer-tokens" label="Transfer" />,
      ]}
    />
  );
};
