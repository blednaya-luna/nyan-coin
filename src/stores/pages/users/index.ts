import { combine, createEffect, createEvent, restore } from 'effector';
import { createGate } from 'effector-react';
import { debounce } from 'patronum';

import { dAppScopeKeys } from 'api/constants';
import { dAppDataByPatter } from 'api/dApp';
import { RawDAppDataItem } from 'api/dApp/types';
import { buildPattern } from 'api/utils';

import { User } from './types';
import { filterUsersByText, parseUsersData } from './utils';

export const UsersPageGate = createGate();

export const fetchUsersDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(dAppScopeKeys.user.email)),
);

export const $users = restore<User[]>(
  fetchUsersDataFx.doneData.map(parseUsersData),
  [],
);

export const setSearchFieldValue = createEvent<string>();
export const $searchFieldValue = restore(setSearchFieldValue, '');

export const setSearchQuery = debounce({
  source: setSearchFieldValue,
  timeout: 300,
});
export const $searchQuery = restore(setSearchQuery, '');

export const $filteredUsers = combine(
  {
    users: $users,
    searchQuery: $searchQuery,
  },
  filterUsersByText,
);
