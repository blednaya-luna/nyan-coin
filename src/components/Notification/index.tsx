import React, { FC } from 'react';
import { Typography, Box, Link } from '@material-ui/core';

export type NotificationProps = {
  title: string;
  description?: string;
  code?: string;
  link?: {
    url: string;
    text: string;
  };
};

export const Notification: FC<NotificationProps> = ({
  title,
  description,
  code,
  link,
}) => {
  return (
    <Box>
      <Typography variant="subtitle2">{title}</Typography>
      {code && <Typography variant="caption">{`Code: ${code}`}</Typography>}
      <Typography variant="body2">{description}</Typography>
      {link && (
        <Typography variant="overline">
          <Link
            href={link.url}
            target="_blank"
            rel="noopener"
            underline="always"
          >
            {link.text}
          </Link>
        </Typography>
      )}
    </Box>
  );
};
