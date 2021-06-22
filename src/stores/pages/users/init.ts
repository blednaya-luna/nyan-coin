import { forward } from 'effector';

import { fetchUsersDataFx, UsersPageGate } from '.';

forward({
  from: UsersPageGate.open,
  to: fetchUsersDataFx,
});
