import { createGate } from 'effector-react';
import { combine, createEffect, createEvent, restore } from 'effector';
import { debounce } from 'patronum';

import { dAppDataByPatter } from 'api';
import { dAppScopeKeys } from 'api/constants';
import { buildPattern } from 'api/utils';
import { RawDAppDataItem } from 'api/types';

import { filterUsersByText, parseUsersData } from './utils';
import { UserItem } from './types';

export const UsersPageGate = createGate();

export const fetchUsersDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(dAppScopeKeys.user.email)),
);

export const $users = restore<UserItem[]>(
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
