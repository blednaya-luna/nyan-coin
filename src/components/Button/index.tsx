import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import React, { FC } from 'react';

export const Button: FC<ButtonProps> = (props) => {
  return <MuiButton variant="outlined" size="small" {...props} />;
};
