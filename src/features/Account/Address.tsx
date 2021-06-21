import React, { FC } from 'react';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';

import { copyAddressToClipboardFx } from 'stores/account';
import { centerEllipsis } from 'utils/centerEllipsis';

type AddressProps = {
  address: string;
};

export const Address: FC<AddressProps> = ({ address }) => {
  return (
    <Grid container alignItems="center" justify="flex-end">
      <Typography variant="caption">{centerEllipsis(address)}</Typography>
      <IconButton
        size="small"
        onClick={() => copyAddressToClipboardFx(address)}
      >
        <FileCopy fontSize="small" />
      </IconButton>
    </Grid>
  );
};
