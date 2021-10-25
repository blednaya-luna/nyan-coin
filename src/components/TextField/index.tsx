import {
  TextField as MuiTextField,
  StandardTextFieldProps,
} from '@material-ui/core';
import React, { ChangeEvent, FC } from 'react';

export const textFieldOnChangePrepend = (
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
) => event.target.value;

export const textFieldOnChangePrependToNumber = (
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
) => Number(event.target.value);

export const TextField: FC<StandardTextFieldProps> = (props) => {
  return <MuiTextField variant="outlined" size="small" fullWidth {...props} />;
};
