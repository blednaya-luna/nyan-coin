import {
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
import { DAPP } from 'config';
import { IssueAssetButton, IssueAssetModal } from 'features/IssueAsset';
import { ReissueAssetButton, ReissueAssetModal } from 'features/ReissueAsset';
import { $assets, AssetsGate } from 'stores/assets';

export const AssetsTab: FC = () => {
  useGate(AssetsGate, { address: DAPP, withAssetsWithEmptyBalance: true });

  return (
    <>
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
                <TableCell>
                  {`${asset.price} NT`}
                  {/* TODO add refresh icon button */}
                </TableCell>
                <TableCell>{asset.balance}</TableCell>
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
      <IssueAssetButton />
      <IssueAssetModal />
      <ReissueAssetModal />
    </>
  );
};
