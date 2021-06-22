import { extractValueFromKey } from 'api/utils';
import { RawDAppDataItem } from 'api/types';

export const parseUsersData = (usersData: RawDAppDataItem[]) =>
  usersData.map((userDataItem) => ({
    address: extractValueFromKey(userDataItem.key),
    email: userDataItem.value,
  }));
