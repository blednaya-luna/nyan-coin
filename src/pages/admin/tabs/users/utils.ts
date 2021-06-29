import { extractValueFromKey } from 'api/utils';

export const parseUsersData = (usersData: WavesKeeper.TStringData[]) =>
  usersData.map((userDataItem) => ({
    address: extractValueFromKey(userDataItem.key),
    email: userDataItem.value,
  }));
