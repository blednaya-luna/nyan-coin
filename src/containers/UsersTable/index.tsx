import React, { FC } from 'react';
import { useList } from 'effector-react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { Avatar } from 'components/Avatar';
import { Address } from 'components/Address';
import { UserBalance } from 'features/UserBalance';
import { $filteredUsers } from 'stores/pages/users';
import { TransferTokensButton } from 'dev/TransferTokens/TransferTokensButton';
import { TransferTokensModal } from 'dev/TransferTokens/TransferTokensModal';

export const UsersTable: FC = () => {
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
            {useList($filteredUsers, (user) => (
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
