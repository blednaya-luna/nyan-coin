import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { IconButtonProps } from '@material-ui/core';
import { Home } from '@material-ui/icons';

import { APP_LOCATION } from 'routes/constants';
import { IconButton } from 'components/IconButton';

export const GoHomeButton: FC<IconButtonProps> = ({ ...props }) => {
  const { push } = useHistory();

  return (
    <IconButton
      {...props}
      title="Go to home page"
      size="medium"
      Icon={Home}
      iconFontSize="default"
      onClick={() => {
        push(APP_LOCATION.home);
      }}
    />
  );
};
