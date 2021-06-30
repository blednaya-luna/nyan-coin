import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC, ReactNode } from 'react';

import { $theme } from './model';

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
