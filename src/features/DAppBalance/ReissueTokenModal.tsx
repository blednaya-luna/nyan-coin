import { Grid } from '@material-ui/core';
import React, { FC } from 'react';

import {
  ReissueTokenDialog,
  QuantityTextField,
  CancelReissueTokenButton,
  ReissueTokenButton,
} from './components';

export const ReissueTokenModal: FC = () => {
  return (
    <ReissueTokenDialog
      title="Reissue token"
      content={
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <QuantityTextField
              type="number"
              label="Quantity (NYAN Token)"
              helperText="Enter quantity in NYAN Token"
              required
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelReissueTokenButton key="cancel-reissue-token" label="Cancel" />,
        <ReissueTokenButton key="reissue-token" label="Reissue token" />,
      ]}
    />
  );
};
