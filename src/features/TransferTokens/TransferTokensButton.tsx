import { AttachMoney } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';
import { User } from 'pages/admin/tabs/users/types';

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
      Icon={AttachMoney}
      onClick={() => setRecipient(recipient)}
    />
  );
};
