import React, { FC } from 'react';
import { Typography, IconButton, Paper, Box } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import { useStore, useGate } from 'effector-react';

import { Avatar } from 'components/Avatar';
import { centerEllipsis } from 'utils/centerEllipsis';
import { copyAddressToClipboardFx } from 'stores/account';

import { $users, UserListGate } from './model';
import { UserBalance } from './UserBalance';
import { useStyles } from './styles';

export const UserList: FC = () => {
  useGate(UserListGate);
  const users = useStore($users);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {users.map((user) => (
        <Paper key={user.address} className={classes.paper}>
          <Avatar address={user.address} />
          <Box>
            <Box className={classes.address}>
              <Typography variant="body2">
                {centerEllipsis(user.address)}
              </Typography>
              <IconButton
                size="small"
                onClick={() => copyAddressToClipboardFx(user.address)}
              >
                <FileCopy fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </Box>
          <UserBalance address={user.address} fetchOnMount />
        </Paper>
      ))}
    </Box>
  );
};
