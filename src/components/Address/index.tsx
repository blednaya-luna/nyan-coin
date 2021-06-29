import { Box, Typography } from '@material-ui/core';
import { FileCopy } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';
import { copyAddressToClipboardFx } from 'stores/account';
import { centerEllipsis } from 'utils/centerEllipsis';

import { useStyles } from './styles';

type AddressProps = {
  address: string;
  disableTypography?: boolean;
  shortAddress?: boolean;
};

export const Address: FC<AddressProps> = ({
  address,
  disableTypography,
  shortAddress = true,
}) => {
  const classes = useStyles();
  const adaptedAddress = shortAddress ? centerEllipsis(address) : address;

  return (
    <Box className={classes.root}>
      {disableTypography ? (
        adaptedAddress
      ) : (
        <Typography variant="caption">{adaptedAddress}</Typography>
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
