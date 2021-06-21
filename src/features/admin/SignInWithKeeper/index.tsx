import React, { FC } from 'react';
import { useGate, useStore } from 'effector-react';
import { reflect } from '@effector/reflect';

import { Button } from 'components/Button';
import {
  $isWavesKeeperInstalled,
  signInWithKeeper,
  WavesKeeperGate,
} from 'stores/keeper';
import 'stores/keeper/init';
import { $isAuthorized } from 'stores/account';

const SignInWithKeeperButton = reflect({
  view: Button,
  bind: {
    onClick: () => signInWithKeeper(),
    disabled: $isWavesKeeperInstalled.map(
      (isWavesKeeperInstalled) => !isWavesKeeperInstalled,
    ),
    children: $isWavesKeeperInstalled.map((isWavesKeeperInstalled) =>
      isWavesKeeperInstalled
        ? 'Sign in with Keeper'
        : 'WavesKeeper initialization...',
    ),
  },
});

export const SignInWithKeeper: FC = () => {
  useGate(WavesKeeperGate);
  const isAuthorized = useStore($isAuthorized);

  return (
    <>{!isAuthorized && <SignInWithKeeperButton size="medium" fullWidth />}</>
  );
};
