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
      title="Issue asset"
      content={
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
              label="Exchange price (NYAN Token)"
              helperText="Enter exchange price of asset in NYAN Token"
              required
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelIssueAssetButton key="cancel-issue-asset" label="Cancel" />,
        <IssueAssetButton key="issue-asset" label="Issue asset" />,
      ]}
    />
  );
};
