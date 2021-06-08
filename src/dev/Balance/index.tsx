import React, { FC } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useGate, useStore } from 'effector-react';

import { $dAppBalance, Gate } from './model';

export const Balance: FC = () => {
  useGate(Gate);
  const dAppBalance = useStore($dAppBalance);

  return (
    <>
      <Typography>{`dApp balance: ${
        dAppBalance || 'unknown'
      } NYAN Token's`}</Typography>
    </>
  );
};
