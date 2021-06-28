import { Typography, Grid } from '@material-ui/core';
import React, { FC } from 'react';

import {
  EmailTextField,
  SignUpButton,
  SignUpDialog,
  CancelSignUpButton,
} from './components';

export const SignUp: FC = () => {
  return (
    <SignUpDialog
      title="Sign Up"
      content={
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography>
              To use the app we need to register you at the Waves blockchain
              level
            </Typography>
          </Grid>
          <Grid item>
            <EmailTextField
              label="Email"
              helperText="Enter your email"
              required
              autoFocus
            />
          </Grid>
        </Grid>
      }
      actions={[
        <CancelSignUpButton key="cancel-signup" label="Cancel" />,
        <SignUpButton key="signup" label="Sign Up" />,
      ]}
    />
  );
};
