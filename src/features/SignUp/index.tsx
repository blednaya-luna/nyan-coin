import React, { FC } from 'react';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';

import { SignUpButton, EmailTextField } from './components';
import { useStyles } from './styles';

export const SignUp: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Typography>Sign up</Typography>
        </Grid>
        <Grid item>
          <SignUpButton>Sign up</SignUpButton>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <EmailTextField
            required
            label="Email"
            helperText="Enter your email"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
