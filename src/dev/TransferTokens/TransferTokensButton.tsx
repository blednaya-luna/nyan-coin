import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { User } from 'stores/pages/users/types';

import { setRecipient } from './model';

type TransferTokensButtonProps = {
  recipient: User;
};

export const TransferTokensButton: FC<TransferTokensButtonProps> = ({
  recipient,
}) => {
  return (
    <IconButton size="small" onClick={() => setRecipient(recipient)}>
      <Send fontSize="small" />
    </IconButton>
  );
};
