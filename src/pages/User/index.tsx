import { Paper, Box, Typography } from '@material-ui/core';
import { useStore } from 'effector-react';
import React from 'react';

import { AppBar } from 'containers/AppBar';
import { $user } from 'stores/account';

export const User = () => {
  const user = useStore($user);

  return (
    <>
      <AppBar title="User" />
      <Box display="flex">
        <Box display="flex" flex="auto" p={2}>
          <Paper>
            <Box p={2} display="flex" flexDirection="column">
              <Typography>{`Address: ${user?.address}`}</Typography>
              <Typography>{`Email: ${user?.email}`}</Typography>
              <Typography>{`Balance: ${user?.balance} NT`}</Typography>
            </Box>
          </Paper>
        </Box>
        <Box display="flex" flex="auto" />
      </Box>
    </>
  );
};

export default User;
