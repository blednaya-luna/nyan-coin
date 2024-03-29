import { createEffect, restore, forward, createEvent, guard } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

import { accountTokenBalance } from 'api/account';
import { RawAccountTokenBalance } from 'api/account/types';
import { dAppDataByPatter } from 'api/dApp';
import { extractValueFromKey } from 'api/utils';
import { DAPP_DATA } from 'config';

import { User } from './types';
import { parseUsers } from './utils';

export const UsersGate = createGate();

const fetchUsersDataFx = createEffect<void, WavesKeeper.TStringData[]>(() =>
  dAppDataByPatter(DAPP_DATA.user.email),
);

const fetchUsersBalanceFx = createEffect<
  WavesKeeper.TStringData[],
  RawAccountTokenBalance[]
>((users) =>
  Promise.all(
    users.map(({ key }) =>
      accountTokenBalance({
        address: extractValueFromKey(key),
      }),
    ),
  ),
);

const usersLoaded = combineEvents({
  events: {
    usersData: fetchUsersDataFx.doneData,
    usersBalance: fetchUsersBalanceFx.doneData,
  },
}).map(parseUsers);

export const $users = restore<User[]>(usersLoaded, []);

export const refreshUsers = createEvent();

guard({
  source: $users,
  clock: UsersGate.open,
  filter: (users) => users.length === 0,
  target: fetchUsersDataFx,
});

forward({
  from: fetchUsersDataFx.doneData,
  to: fetchUsersBalanceFx,
});

forward({
  from: refreshUsers,
  to: fetchUsersDataFx,
});
