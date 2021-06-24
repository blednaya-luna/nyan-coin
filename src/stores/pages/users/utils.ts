import { RawDAppDataItem } from 'api/dApp/types';
import { extractValueFromKey } from 'api/utils';

import { User } from './types';

export const parseUsersData = (usersData: RawDAppDataItem[]) =>
  usersData.map((userDataItem) => ({
    address: extractValueFromKey(userDataItem.key),
    email: userDataItem.value,
  }));

export const filterUsersByText = ({
  users,
  searchQuery,
}: {
  users: User[];
  searchQuery: string;
}) =>
  users.filter(
    (user) =>
      user.address.includes(searchQuery) || user.email.includes(searchQuery),
  );
