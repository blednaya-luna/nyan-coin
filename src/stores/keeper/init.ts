import { guard } from 'effector';
import { delay } from 'patronum';

import {
  $isWavesKeeperInstalled,
  setupSynchronizationWithWavesKeeperFx,
  setupWavesKeeperFx,
  signInWithKeeper,
  WavesKeeperGate,
} from '.';

delay({
  source: WavesKeeperGate.open,
  timeout: 1000,
  target: setupWavesKeeperFx,
});

guard({
  source: signInWithKeeper,
  filter: $isWavesKeeperInstalled,
  target: setupSynchronizationWithWavesKeeperFx,
});
