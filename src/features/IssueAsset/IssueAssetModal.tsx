import { Grid } from '@material-ui/core';
import React, { FC } from 'react';

import {
  IssueAssetDialog,
  AssetNameTextField,
  AssetDescriptionTextField,
  AssetQuantityTextField,
  AssetExchangePriceTextField,
  CancelIssueAssetButton,
  IssueAssetButton,
} from './components';

export const IssueAssetModal: FC = () => {
  return (
    <IssueAssetDialog
      title="Issue new asset"
      content={
        <>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <AssetNameTextField
                label="Name"
                helperText="Enter name of asset"
                required
              />
            </Grid>
            <Grid item>
              <AssetDescriptionTextField
                label="Description"
                helperText="Enter description of asset"
                required
              />
            </Grid>
            <Grid item>
              <AssetQuantityTextField
                label="Quantity"
                helperText="Enter quantity of asset"
                required
              />
            </Grid>
            <Grid item>
              <AssetExchangePriceTextField
                label="Exchange price (NYAN Tokens)"
                helperText="Enter exchange price of asset in NYAN Tokens"
                required
              />
            </Grid>
          </Grid>
        </>
      }
      actions={
        <>
          <CancelIssueAssetButton label="Cancel" />
          <IssueAssetButton label="Issue new asset" />
        </>
      }
    />
  );
};
