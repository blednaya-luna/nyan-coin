import React, { FC } from 'react';

import { Button } from 'components/Button';
import { User } from 'stores/users/types';

import { setRecipient } from './model';

type TransferTokensButtonProps = {
  recipient: User;
};

export const TransferTokensButton: FC<TransferTokensButtonProps> = ({
  recipient,
}) => {
  return (
    <Button label="Transfer tokens" onClick={() => setRecipient(recipient)} />
  );
};
