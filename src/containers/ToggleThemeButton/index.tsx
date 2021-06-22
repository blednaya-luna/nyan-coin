import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { IconButton, IconButtonProps } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';

import { $theme, toggleTheme } from 'stores/ThemeProvider';

export const ToggleThemeButton: FC<IconButtonProps> = ({ ...props }) => {
  const theme = useStore($theme);

  return (
    <IconButton {...props} color="inherit" onClick={() => toggleTheme()}>
      {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
