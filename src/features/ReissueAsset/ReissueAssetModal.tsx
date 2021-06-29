import { Grid } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import {
  ReissueAssetDialog,
  QuantityTextField,
  CancelReissueAssetButton,
  ReissueAssetButton,
} from './components';
import { $assetToReissue } from './model';

export const ReissueAssetModal: FC = () => {
  const assetToReissue = useStore($assetToReissue);

  return (
    <ReissueAssetDialog
      title={`Reissue "${assetToReissue?.name}" asset`}
      content={
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <QuantityTextField
              label="Quantity"
              helperText="Enter quantity of asset tokens to be reissued"
              required
              autoFocus
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelReissueAssetButton key="cancel-reissue-asset" label="Cancel" />,
        <ReissueAssetButton key="reissue-asset" label="Reissue asset" />,
      ]}
    />
  );
};
