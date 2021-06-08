import React, { FC } from 'react';
import { Toolbar as MuiToolbar, Typography } from '@material-ui/core';

type ToolbarProps = {
  title: string;
};

export const Toolbar: FC<ToolbarProps> = ({ title }) => {
  return (
    <MuiToolbar>
      <Typography>{title}</Typography>
    </MuiToolbar>
  );
};
