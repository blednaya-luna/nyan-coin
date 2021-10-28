import { Box, Grid } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { AssetTicket } from 'components/AssetTicket';

import {
  AmountTextField,
  RequestRewardButton,
  RequestRewardDialog,
  CancelRequestRewardButton,
} from './components';
import { $assetToRequestReward } from './model';
import { useStyles } from './styles';

export const RequestRewardModal: FC = () => {
  const assetToRequestReward = useStore($assetToRequestReward);
  const classes = useStyles();

  return (
    <RequestRewardDialog
      title={`Request reward from asset "${assetToRequestReward?.name}"`}
      content={
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Box className={classes.assetContainer}>
              {assetToRequestReward && (
                <AssetTicket asset={assetToRequestReward} />
              )}
            </Box>
          </Grid>
          <Grid item>
            <AmountTextField
              label="amount"
              helperText="Enter how many you want to request rewards"
              required
              autoFocus
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelRequestRewardButton
          key="cancel-request-reward-asset"
          label="Cancel"
        />,
        <RequestRewardButton
          key="request-reward-asset"
          label="Request reward"
        />,
      ]}
    />
  );
};
