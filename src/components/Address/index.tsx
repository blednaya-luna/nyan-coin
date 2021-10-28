import { Box, Typography, Link, TypographyVariant } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';
import { ContentCopy } from 'components/icons/ContentCopy';
import { centerEllipsis } from 'utils/centerEllipsis';
import { copyAddressToClipboard } from 'utils/copyAddressToClipboard';
import { Scope, getExplorerLink, AddressScope } from 'utils/getExplorerLink';

import { useStyles } from './styles';

type AddressProps = {
  address: string;
  scope?: Scope;
  type?: AddressScope;
  shortAddress?: boolean;
  variant?: TypographyVariant;
  disableTypography?: boolean;
};

export const Address: FC<AddressProps> = ({
  address,
  scope,
  type,
  shortAddress = true,
  variant = 'caption',
  disableTypography,
}) => {
  const classes = useStyles();
  const adaptedAddress = shortAddress ? centerEllipsis(address) : address;

  return (
    <Box className={classes.root}>
      {disableTypography ? (
        adaptedAddress
      ) : (
        <Typography variant={variant}>{adaptedAddress}</Typography>
      )}
      <IconButton
        className={classes.iconButton}
        title="Copy address to clipboard"
        Icon={ContentCopy}
        onClick={() => copyAddressToClipboard(address)}
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
          />
        </Link>
      )}
    </Box>
  );
};
