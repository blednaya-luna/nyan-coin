import { guard } from 'effector';
import { delay } from 'patronum';

import {
  $isWavesKeeperInstalled,
  setupSynchronizationWithWavesKeeperFx,
  setupWavesKeeperFx,
  WavesKeeperGate,
} from '.';

delay({
  source: WavesKeeperGate.open,
  timeout: 1000,
  target: setupWavesKeeperFx,
});

guard({
  source: setupWavesKeeperFx.done,
  filter: $isWavesKeeperInstalled,
  target: setupSynchronizationWithWavesKeeperFx,
});
