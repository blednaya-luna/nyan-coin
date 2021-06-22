import React, { FC, ReactNode } from 'react';
import { useGate } from 'effector-react';

import { WavesKeeperGate } from 'stores/keeper';
import 'stores/keeper/init';

type ConnectWavesKeeperProps = {
  children: ReactNode;
};

export const ConnectWavesKeeper: FC<ConnectWavesKeeperProps> = ({
  children,
}) => {
  useGate(WavesKeeperGate);

  return <>{children}</>;
};
