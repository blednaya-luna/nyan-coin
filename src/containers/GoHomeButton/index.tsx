import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { IconButton, IconButtonProps } from '@material-ui/core';
import { Home } from '@material-ui/icons';

import { APP_LOCATION } from 'routes/constants';

export const GoHomeButton: FC<IconButtonProps> = ({ ...props }) => {
  const { push } = useHistory();

  return (
    <IconButton
      {...props}
      color="inherit"
      onClick={() => {
        push(APP_LOCATION.home);
      }}
    >
      <Home />
    </IconButton>
  );
};
