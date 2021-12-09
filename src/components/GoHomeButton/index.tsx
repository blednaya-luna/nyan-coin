import { IconButtonProps } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import React, { FC } from 'react';
import { useHistory } from 'react-router';

import { IconButton } from 'components/IconButton';
import { APP_LOCATION } from 'routes';

export const GoHomeButton: FC<IconButtonProps> = ({ ...props }) => {
  const { push } = useHistory();

  return (
    <IconButton
      {...props}
      title="Go to home page"
      size="medium"
      Icon={Home}
      onClick={() => push(APP_LOCATION.assets)}
    />
  );
};
