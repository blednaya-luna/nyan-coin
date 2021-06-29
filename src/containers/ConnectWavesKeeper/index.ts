import { useGate } from 'effector-react';
import { FC } from 'react';

import { WavesKeeperGate } from 'stores/keeper';
import 'stores/keeper/init';

type ConnectWavesKeeperProps = {
  children: JSX.Element;
};

export const ConnectWavesKeeper: FC<ConnectWavesKeeperProps> = ({
  children,
}) => {
  useGate(WavesKeeperGate);

  return children;
};
