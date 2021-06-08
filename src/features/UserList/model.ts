import { createEffect, forward, createStore } from 'effector';
import { createGate } from 'effector-react';

import { dAppScopeKeys } from 'api/constants';
import { dAppDataByPatter } from 'api';
import { buildPattern, extractValueFromKey } from 'api/utils';
import { RawDAppDataItem } from 'api/types';

export const UserListGate = createGate();

const fetchUsersDataFx = createEffect<void, RawDAppDataItem[]>(() =>
  dAppDataByPatter(buildPattern(dAppScopeKeys.user.email)),
);

type UserItem = {
  address: string;
  email: string;
};

export const $users = createStore<UserItem[]>([]).on(
  fetchUsersDataFx.doneData,
  (_, response) =>
    response.map((userDataItem) => ({
      address: extractValueFromKey(userDataItem.key),
      email: userDataItem.value,
    })),
);

forward({
  from: UserListGate.open,
  to: fetchUsersDataFx,
});
