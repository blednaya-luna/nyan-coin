import { extractValueFromKey } from 'api/utils';
import { RawDAppDataItem } from 'api/types';

import { UserItem } from './types';

export const parseUsersData = (usersData: RawDAppDataItem[]) =>
  usersData.map((userDataItem) => ({
    address: extractValueFromKey(userDataItem.key),
    email: userDataItem.value,
  }));

export const filterUsersByText = ({
  users,
  searchQuery,
}: {
  users: UserItem[];
  searchQuery: string;
}) =>
  users.filter(
    (user) =>
      user.address.includes(searchQuery) || user.email.includes(searchQuery),
  );
