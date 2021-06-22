import React, { FC, ReactNode } from 'react';
import { useStore } from 'effector-react';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core';

import { $theme } from 'stores/ThemeProvider';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const theme = useStore($theme);

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        palette: {
          type: theme,
        },
      })}
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
