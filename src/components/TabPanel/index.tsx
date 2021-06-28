import { Box } from '@material-ui/core';
import React, { FC } from 'react';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export const TabPanel: FC<TabPanelProps> = ({
  children,
  value,
  index,
}: TabPanelProps) => {
  return (
    <Box role="tabpanel" hidden={value !== index} p={2}>
      {value === index && children}
    </Box>
  );
};
