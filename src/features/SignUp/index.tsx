import { Typography } from '@material-ui/core';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { Button } from 'components/Button';
import { Dialog } from 'components/Dialog';

import { EmailTextField, SignUpButton } from './components';
import { $signUpModalIsOpen, toggleOpenSignUpModal } from './model';
import { useStyles } from './styles';

export const SignUp: FC = () => {
  const classes = useStyles();
  const signUpModalIsOpen = useStore($signUpModalIsOpen);

  return (
    <Dialog
      open={signUpModalIsOpen}
      onClose={toggleOpenSignUpModal}
      title="Sign Up"
      content={
        <>
          <Typography className={classes.info}>
            To use the app we need to register you at the Waves blockchain level
          </Typography>
          <EmailTextField
            required
            label="Email"
            helperText="Enter your email"
          />
        </>
      }
      actions={
        <>
          <Button onClick={() => toggleOpenSignUpModal()}>Cancel</Button>
          <SignUpButton>Sign Up</SignUpButton>
        </>
      }
    />
  );
};
