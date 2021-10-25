import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type ButtonProps = MuiButtonProps & {
  label: string;
};

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <MuiButton color="inherit" variant="outlined" size="small" {...props}>
      {label}
    </MuiButton>
  );
};
