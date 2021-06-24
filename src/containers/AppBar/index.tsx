import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC, ReactNode } from 'react';

import { GoHomeButton } from 'containers/GoHomeButton';
import { ToggleThemeButton } from 'containers/ToggleThemeButton';
import { UserAccount } from 'containers/UserAccount';
import { SignIn } from 'features/SignIn';
import { SignUp } from 'features/SignUp';
import { $isAuthorized } from 'stores/account';
import 'stores/account/init';

import { useStyles } from './styles';

type AppBarProps = {
  title?: string;
  searchComponent?: ReactNode;
};

export const AppBar: FC<AppBarProps> = ({ title, searchComponent }) => {
  const isAuthorized = useStore($isAuthorized);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <GoHomeButton className={classes.goHomeButton} edge="start" />
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <Box className={classes.search}>{searchComponent}</Box>
          <ToggleThemeButton />
          {isAuthorized ? <UserAccount /> : <SignIn />}
          <SignUp />
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
