import React, { FC, ReactNode } from 'react';
import { useHistory } from 'react-router';
import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Brightness7, Home } from '@material-ui/icons';

import { APP_LOCATION } from 'routes/constants';
import { toggleTheme } from 'themes/model';

import { useStyles } from './styles';

type AppBarProps = {
  title?: string;
  search?: ReactNode;
};

export const AppBar: FC<AppBarProps> = ({ title, search }) => {
  const { push } = useHistory();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.homeButton}
            edge="start"
            color="inherit"
            onClick={() => {
              push(APP_LOCATION.home);
            }}
          >
            <Home />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          {search}
          <IconButton
            className={classes.button}
            edge="start"
            color="inherit"
            onClick={() => toggleTheme()}
          >
            <Brightness7 />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};
