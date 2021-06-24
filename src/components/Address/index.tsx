import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';

import { IconButton } from 'components/IconButton';
import { copyAddressToClipboardFx } from 'stores/account';
import { centerEllipsis } from 'utils/centerEllipsis';

import { useStyles } from './styles';

type AddressProps = {
  address: string;
  disableTypography?: boolean;
};

export const Address: FC<AddressProps> = ({ address, disableTypography }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {disableTypography ? (
        address
      ) : (
        <Typography variant="caption">{centerEllipsis(address)}</Typography>
      )}
      <IconButton
        className={classes.iconButton}
        title="Copy address to clipboard"
        Icon={FileCopy}
        onClick={() => copyAddressToClipboardFx(address)}
      />
    </Box>
  );
};
