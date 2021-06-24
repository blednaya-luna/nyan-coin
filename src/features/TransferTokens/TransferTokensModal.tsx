import { Box } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';

import { AmountTextField, TransferTokensButton } from './components';
import { $transferModalIsOpen, $recipient, resetRecipient } from './model';
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
          <Button label="Cancel" onClick={() => resetRecipient()} />
          <TransferTokensButton label="Transfer" />
        </>
      }
    />
  );
};
