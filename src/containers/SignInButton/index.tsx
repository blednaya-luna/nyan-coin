import { Person } from '@material-ui/icons';
import React, { FC } from 'react';

import { Button } from 'components/Button';
import { signInWithKeeper } from 'stores/keeper';

export const SignInButton: FC = () => {
  return (
    <Button
      label="Sign In"
      endIcon={<Person />}
      onClick={() => signInWithKeeper()}
    />
  );
};
