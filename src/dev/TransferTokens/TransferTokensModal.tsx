import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { Box } from '@material-ui/core';

import { Dialog } from 'components/Dialog';
import { Button } from 'components/Button';

import { $transferModalIsOpen, $recipient, resetRecipient } from './model';
import { AmountTextField, TransferTokensButton } from './components';
import { useStyles } from './styles';

export const TransferTokensModal: FC = () => {
  const transferModalIsOpen = useStore($transferModalIsOpen);
  const recipient = useStore($recipient);
  const classes = useStyles();

  return (
    <Dialog
      open={transferModalIsOpen}
      onClose={() => resetRecipient()}
      title={`Transfer NYAN Tokens to ${recipient?.email}`}
      content={
        <Box className={classes.content}>
          <AmountTextField
            label="amount"
            helperText="Enter how many tokens need to be transferred"
            required
            fullWidth={false}
            autoFocus
          />
        </Box>
      }
      actions={
        <>
          <Button onClick={() => resetRecipient()}>Cancel</Button>
          <TransferTokensButton>Transfer</TransferTokensButton>
        </>
      }
    />
  );
};
