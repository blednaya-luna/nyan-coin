import { Box } from '@material-ui/core';
import { useGate } from 'effector-react';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';
import { UsersSearchField } from 'containers/UsersSearchField';
import { UsersTable } from 'containers/UsersTable';
import { UsersPageGate } from 'stores/pages/users';
import 'stores/pages/users/init';

import { useStyles } from '../styles';

const Users: FC = () => {
  useGate(UsersPageGate);
  const classes = useStyles();

  return (
    <>
      <AppBar title="Registered users" searchComponent={<UsersSearchField />} />
      <Box className={classes.root}>
        <UsersTable />
      </Box>
    </>
  );
};

export default Users;
