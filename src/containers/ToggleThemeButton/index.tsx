import React, { FC } from 'react';
import { useStore } from 'effector-react';
import { IconButtonProps } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';

import { IconButton } from 'components/IconButton';
import { $theme, toggleTheme } from 'stores/ThemeProvider';

export const ToggleThemeButton: FC<IconButtonProps> = ({ ...props }) => {
  const theme = useStore($theme);

  return (
    <IconButton
      title={theme === 'dark' ? 'Toggle light theme' : 'Toggle dark theme'}
      size="medium"
      Icon={theme === 'dark' ? Brightness7 : Brightness4}
      iconFontSize="default"
      onClick={() => toggleTheme()}
      {...props}
    />
  );
};
