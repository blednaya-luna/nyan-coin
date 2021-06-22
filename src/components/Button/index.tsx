import React, { FC } from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

export const Button: FC<ButtonProps> = (props) => {
  return <MuiButton variant="outlined" size="small" {...props} />;
};
