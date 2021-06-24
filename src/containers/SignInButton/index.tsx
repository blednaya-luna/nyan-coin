import { Person } from '@material-ui/icons';
import React, { FC } from 'react';

import { Button } from 'components/Button';
import { signInWithKeeper } from 'stores/keeper';

export const SignInButton: FC = () => {
  return (
    <Button
      color="inherit"
      endIcon={<Person />}
      onClick={() => signInWithKeeper()}
    >
      Sign In
    </Button>
  );
};
