import React, { FC } from 'react';
import { useList } from 'effector-react';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';

import { Avatar } from 'components/Avatar';
import { UserBalance } from 'features/UserBalance';
import { copyAddressToClipboardFx } from 'stores/account';
import { $filteredUsers } from 'stores/pages/users';

import { useStyles } from './styles';

export const UsersTable: FC = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Email</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {useList($filteredUsers, (user) => (
            <TableRow>
              <TableCell>
                <Avatar address={user.address} />
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.address}
                <IconButton
                  className={classes.copyAddressButton}
                  size="small"
                  onClick={() => copyAddressToClipboardFx(user.address)}
                >
                  <FileCopy fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell>
                <UserBalance address={user.address} fetchOnMount />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
