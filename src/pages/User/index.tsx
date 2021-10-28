import {
  Paper,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import { useGate, useList, useStore } from 'effector-react';
import React from 'react';
import { useParams } from 'react-router';

import { Address } from 'components/Address';
import { Avatar } from 'components/Avatar';
import { Balance } from 'components/Balance';
import { Button } from 'components/Button';
import { AppBar } from 'containers/AppBar';
import { $user } from 'stores/account';
import { $filteredAssets, AssetsGate } from 'stores/assets';

export const User = () => {
  const user = useStore($user);
  const { address } = useParams<{ address: string }>();
  useGate(AssetsGate, { address, withAssetsWithEmptyBalance: false });

  return (
    <>
      <AppBar title="User" />
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
          width="30%"
        >
          {user && (
            <>
              <Avatar address={user.address} />
              <Box p={1} />
              <Address
                address={user.address}
                scope="address"
                shortAddress={false}
                variant="subtitle2"
              />
              <Typography variant="subtitle2">{user.email}</Typography>
              <Balance
                balance={user.balance}
                // TODO add refresh balance
                refreshBalance={() => {}}
                variant="subtitle2"
              />
            </>
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
          width="70%"
        >
          <Typography variant="overline" gutterBottom>
            My assets
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>AssetId</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {useList($filteredAssets, (asset) => (
                  <TableRow>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.description}</TableCell>
                    <TableCell>{asset.balance}</TableCell>
                    <TableCell>
                      <Address
                        address={asset.assetId}
                        scope="assets"
                        disableTypography
                      />
                    </TableCell>
                    <TableCell>
                      <Button label="Order" startIcon={<Assignment />} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box p={2} />
          <Typography variant="overline" gutterBottom>
            My orders
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>AssetId</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>asset name</TableCell>
                  <TableCell>asset description</TableCell>
                  <TableCell>asset price</TableCell>
                  <TableCell>asset balance</TableCell>
                  <TableCell>asset assetId</TableCell>
                  <TableCell>asset actions</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default User;
