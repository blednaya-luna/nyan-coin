import React, { FC } from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';

import { copyAddressToClipboardFx } from 'stores/account';
import { centerEllipsis } from 'utils/centerEllipsis';

import { useStyles } from './styles';

type AddressProps = {
  address: string;
};

export const Address: FC<AddressProps> = ({ address }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="caption">{centerEllipsis(address)}</Typography>
      <IconButton
        size="small"
        color="inherit"
        onClick={() => copyAddressToClipboardFx(address)}
      >
        <FileCopy fontSize="small" />
      </IconButton>
    </Box>
  );
};
