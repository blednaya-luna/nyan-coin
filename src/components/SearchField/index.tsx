import React, { FC } from 'react';
import { Box, InputBase, InputBaseProps } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import {
  textFieldOnChangePrepend,
  textFieldOnChangePrependToNumber,
} from 'components/TextField';

import { useStyles } from './styles';

type SearchProps = {
  value: InputBaseProps['value'];
  onChange: InputBaseProps['onChange'];
};

export const SearchField: FC<SearchProps> = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <Box className={classes.search}>
      <Box className={classes.searchIcon}>
        <Search />
      </Box>
      <InputBase
        value={value}
        onChange={onChange}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </Box>
  );
};

export { textFieldOnChangePrepend, textFieldOnChangePrependToNumber };
