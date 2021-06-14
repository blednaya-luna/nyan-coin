import React, { FC } from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import {
  TextField,
  textFieldOnChangePrepend,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

export const SearchField: FC<StandardTextFieldProps> = (props) => {
  return (
    <TextField
      placeholder="Search…"
      InputProps={{
        startAdornment: <Search />,
      }}
      {...props}
    />
  );
};

export { textFieldOnChangePrepend, textFieldOnChangePrependToNumber };
