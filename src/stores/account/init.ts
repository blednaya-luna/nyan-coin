import { guard } from 'effector';

import { $address, getUserDataFx, setIsAuthorized } from '.';

guard({
  clock: setIsAuthorized,
  source: $address,
  filter: (address): address is string => address !== null,
  target: getUserDataFx,
});
