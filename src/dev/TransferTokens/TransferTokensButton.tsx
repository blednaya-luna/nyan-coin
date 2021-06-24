import React, { FC } from 'react';
import { Send } from '@material-ui/icons';

import { IconButton } from 'components/IconButton';
import { User } from 'stores/pages/users/types';

import { setRecipient } from './model';

type TransferTokensButtonProps = {
  recipient: User;
};

export const TransferTokensButton: FC<TransferTokensButtonProps> = ({
  recipient,
}) => {
  return (
    <IconButton
      title="Transfer NT Tokens to user"
      Icon={Send}
      onClick={() => setRecipient(recipient)}
    />
  );
};
