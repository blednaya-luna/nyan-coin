import React, { FC } from 'react';
import { useGate } from 'effector-react';
import { Box } from '@material-ui/core';

import { AppBar } from 'components/AppBar';
import { UsersSearchField } from 'features/UsersTable/UsersSearchField';
import { UsersTable } from 'features/UsersTable';
import { UsersPageGate } from 'stores/pages/users';
import 'stores/pages/users/init';

import { useStyles } from './styles';

const Users: FC = () => {
  useGate(UsersPageGate);
  const classes = useStyles();

  return (
    <>
      <AppBar title="Registered users" search={<UsersSearchField />} />
      <Box className={classes.root}>
        <UsersTable />
      </Box>
    </>
  );
};

export default Users;
