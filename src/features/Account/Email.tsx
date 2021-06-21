import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';

type EmailProps = {
  email: string;
};

export const Email: FC<EmailProps> = ({ email }) => {
  return (
    <Grid container alignItems="center" justify="flex-end">
      <Typography variant="caption">{email}</Typography>
    </Grid>
  );
};
