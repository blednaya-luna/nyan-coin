import { RawDAppDataItem } from 'api/dApp/types';
import { extractValueFromKey } from 'api/utils';

export const parseUsersData = (usersData: RawDAppDataItem[]) =>
  usersData.map((userDataItem) => ({
    address: extractValueFromKey(userDataItem.key),
    email: userDataItem.value,
  }));
