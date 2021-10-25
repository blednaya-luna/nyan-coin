import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC, ReactNode } from 'react';

import { UserAccount } from 'components/Account';
import { GoHomeButton } from 'components/GoHomeButton';
import { SignUp } from 'features/SignUp';
import { ToggleThemeButton } from 'features/ThemeProvider';
import { $user } from 'stores/account';

import { useStyles } from './styles';

type AppBarProps = {
  title?: string;
  searchComponent?: ReactNode;
};

export const AppBar: FC<AppBarProps> = ({ title, searchComponent }) => {
  const user = useStore($user);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <GoHomeButton className={classes.iconButton} edge="start" />
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <Box className={classes.search}>{searchComponent}</Box>
          <ToggleThemeButton className={classes.iconButton} />
          {user && <UserAccount user={user} />}
          <SignUp />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
