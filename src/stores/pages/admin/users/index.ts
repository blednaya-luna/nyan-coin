import { createEffect, restore, forward, createEvent, guard } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

import { accountTokenBalance } from 'api/account';
import { RawAccountTokenBalanceItem } from 'api/account/types';
import { dAppDataByPatter } from 'api/dApp';
import { buildPattern, extractValueFromKey } from 'api/utils';
import { DAPP_DATA } from 'config';

import { User } from './types';
import { parseUsers, updateUserBalance } from './utils';

export const UsersGate = createGate();

const fetchUsersDataFx = createEffect<void, WavesKeeper.TStringData[]>(() =>
  dAppDataByPatter(buildPattern(DAPP_DATA.user.email)),
);

const fetchUsersBalanceFx = createEffect<
  WavesKeeper.TStringData[],
  RawAccountTokenBalanceItem[]
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

export const refreshUserBalance = createEvent<User>();
const refreshUserBalanceFx =
  createEffect<User, RawAccountTokenBalanceItem>(accountTokenBalance);

export const $users = restore<User[]>(usersLoaded, []).on(
  refreshUserBalanceFx.doneData,
  updateUserBalance,
);

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
  from: refreshUserBalance,
  to: refreshUserBalanceFx,
});
