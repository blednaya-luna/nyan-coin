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
import { ReissueAssetButton } from 'features/ReissueAsset/ReissueAssetButton';
import { ReissueAssetModal } from 'features/ReissueAsset/ReissueAssetModal';

import { AssetsGate, $assets } from './model';

export const Assets: FC = () => {
  useGate(AssetsGate);

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
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {useList($assets, (asset) => (
              <TableRow>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.description}</TableCell>
                <TableCell>{`${asset.price} NT`}</TableCell>
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
      <ReissueAssetModal />
    </>
  );
};
