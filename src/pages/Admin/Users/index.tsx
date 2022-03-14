import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@material-ui/core';
import { useGate, useList } from 'effector-react';
import React, { FC } from 'react';

import { Address } from 'components/Address';
import { Avatar } from 'components/Avatar';
import { Balance } from 'components/Balance';
import { Button } from 'components/Button';
import {
  TransferTokensButton,
  TransferTokensModal,
} from 'features/TransferTokens';
import { UsersGate, $users, refreshUsers } from 'stores/users';

export const UsersTab: FC = () => {
  useGate(UsersGate);

  return (
    <>
      <Box p={2} display="flex" justifyContent="flex-end">
        <Button label="Refresh" onClick={() => refreshUsers()} />
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {useList($users, (user) => (
              <TableRow>
                <TableCell>
                  <Avatar address={user.address} />
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Address
                    address={user.address}
                    scope="address"
                    type="assets"
                    disableTypography
                  />
                </TableCell>
                <TableCell>
                  <Balance balance={user.balance} disableTypography />
                </TableCell>
                <TableCell>
                  <TransferTokensButton recipient={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TransferTokensModal />
    </>
  );
};
