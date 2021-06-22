import { createGate } from 'effector-react';
import { createEffect, restore } from 'effector';

import { dAppDataByPatter } from 'api';
import { dAppScopeKeys } from 'api/constants';
import { buildPattern } from 'api/utils';
import { RawDAppDataItem } from 'api/types';

import { parseUsersData } from './utils';
import { UserItem } from './types';

export const UsersPageGate = createGate();

export const fetchUsersDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(dAppScopeKeys.user.email)),
);

export const $users = restore<UserItem[]>(
  fetchUsersDataFx.doneData.map(parseUsersData),
  [],
);
