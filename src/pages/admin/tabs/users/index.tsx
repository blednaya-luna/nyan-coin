import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Edit, DeleteForever } from '@material-ui/icons';
import { useGate, useList } from 'effector-react';
import React, { FC } from 'react';

import { Address } from 'components/Address';
import { Avatar } from 'components/Avatar';
import { IconButton } from 'components/IconButton';
import { TransferTokensButton } from 'features/TransferTokens/TransferTokensButton';
import { TransferTokensModal } from 'features/TransferTokens/TransferTokensModal';
import { UserBalance } from 'features/UserBalance';

import { UsersGate, $users } from './model';

export const Users: FC = () => {
  useGate(UsersGate);

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell />
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
                  <Address address={user.address} disableTypography />
                </TableCell>
                <TableCell>
                  <UserBalance
                    address={user.address}
                    fetchOnMount
                    disableTypography
                  />
                </TableCell>
                <TableCell>
                  <TransferTokensButton recipient={user} />
                  <IconButton title="Edit user" Icon={Edit} disabled />
                  <IconButton
                    title="Revoke user"
                    Icon={DeleteForever}
                    disabled
                  />
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