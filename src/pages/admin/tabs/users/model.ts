import { createEffect, restore, forward } from 'effector';
import { createGate } from 'effector-react';

import { dAppDataByPatter } from 'api/dApp';
import { RawDAppDataItem } from 'api/dApp/types';
import { buildPattern } from 'api/utils';
import { DAPP_DATA } from 'config';

import { User } from './types';
import { parseUsersData } from './utils';

export const UsersGate = createGate();

export const fetchUsersDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(DAPP_DATA.user.email)),
);

export const $users = restore<User[]>(
  fetchUsersDataFx.doneData.map(parseUsersData),
  [],
);

forward({
  from: UsersGate.open,
  to: fetchUsersDataFx,
});
