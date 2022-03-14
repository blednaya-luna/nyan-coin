import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useGate, useList } from 'effector-react';
import React, { FC } from 'react';

import { Address } from 'components/Address';
import { Balance } from 'components/Balance';
import { Button } from 'components/Button';
import { DAPP } from 'config';
import { IssueAssetButton, IssueAssetModal } from 'features/IssueAsset';
import { ReissueAssetButton, ReissueAssetModal } from 'features/ReissueAsset';
import { $assets, AssetsGate, refreshAssets } from 'stores/assets';

export const AssetsTab: FC = () => {
  useGate(AssetsGate, { address: DAPP, withAssetsWithEmptyBalance: true });

  return (
    <>
      <Box p={2} display="flex" justifyContent="space-between">
        <IssueAssetButton />
        <Button label="Refresh" onClick={() => refreshAssets()} />
      </Box>
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
            {useList($assets, (asset) => (
              <TableRow>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.description}</TableCell>
                <TableCell>{`${asset.price} NT`}</TableCell>
                <TableCell>
                  <Balance
                    balance={asset.balance}
                    type="token"
                    disableTypography
                  />
                </TableCell>
                <TableCell>
                  <Address
                    address={asset.assetId}
                    scope="assets"
                    disableTypography
                  />
                </TableCell>
                <TableCell>
                  <ReissueAssetButton asset={asset} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IssueAssetModal />
      <ReissueAssetModal />
    </>
  );
};
