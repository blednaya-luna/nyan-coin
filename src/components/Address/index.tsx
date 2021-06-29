import { Box, Typography, Link } from '@material-ui/core';
import { FileCopy, Visibility } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';
import { copyAddressToClipboardFx } from 'stores/account';
import { centerEllipsis } from 'utils/centerEllipsis';
import { Scope, getExplorerLink, AddressScope } from 'utils/getExplorerLink';

import { useStyles } from './styles';

type AddressProps = {
  address: string;
  shortAddress?: boolean;
  scope?: Scope;
  type?: AddressScope;
  disableTypography?: boolean;
};

export const Address: FC<AddressProps> = ({
  address,
  shortAddress = true,
  scope,
  type,
  disableTypography,
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
      {scope && (
        <Link
          href={getExplorerLink(scope, address, type)}
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <IconButton
            className={classes.iconButton}
            title="See at Waves Explorer"
            Icon={Visibility}
            onClick={() => copyAddressToClipboardFx(address)}
          />
        </Link>
      )}
    </Box>
  );
};
