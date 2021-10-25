import { Container, Paper, Typography, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { useGate } from 'effector-react';
import React, { FC } from 'react';

import {
  ReissueTokenView,
  QuantityTextField,
  DAppBalance,
  ReissueTokenButton,
  OpenReissueTokenViewButton,
} from './components';
import { BalanceGate } from './model';
import { useStyles } from './styles';

export const BalanceTab: FC = () => {
  useGate(BalanceGate);
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Paper className={classes.root}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="overline">dApp balance</Typography>
          </Grid>
          <Grid item>
            <Paper
              className={clsx(classes.root, classes.balance)}
              variant="outlined"
            >
              <DAppBalance disableTypography />
            </Paper>
          </Grid>
          <Grid container item justify="flex-end">
            <OpenReissueTokenViewButton label="Open reissue view" />
          </Grid>
        </Grid>
      </Paper>
      <ReissueTokenView direction="up" mountOnEnter unmountOnExit>
        <Paper className={clsx(classes.root, classes.reissueToken)}>
          <Grid container direction="column" alignItems="flex-end" spacing={1}>
            <Grid container item>
              <QuantityTextField
                type="number"
                label="Quantity (NYAN Token)"
                helperText="Enter quantity in NYAN Token"
                required
              />
            </Grid>
            <Grid item>
              <ReissueTokenButton label="Reissue" />
            </Grid>
          </Grid>
        </Paper>
      </ReissueTokenView>
    </Container>
  );
};
