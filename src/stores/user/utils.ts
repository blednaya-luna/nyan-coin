import { RawAccountTokenBalance } from 'api/account/types';
import { extractValueFromKey } from 'api/utils';
import { Nullable } from 'utils/types';

import { User } from './types';

export const parseUser = ({
  userData,
  userBalance,
}: {
  userData: WavesKeeper.TStringData[];
  userBalance: RawAccountTokenBalance;
}): Nullable<User> => {
  if (userData.length === 1) {
    const userDataItem = userData[0];

    return {
      address: extractValueFromKey(userDataItem.key),
      email: userDataItem.value,
      balance: userBalance.balance,
    };
  }

  return null;
};

export const parseUsers = ({
  usersData,
  usersBalance,
}: {
  usersData: WavesKeeper.TStringData[];
  usersBalance: RawAccountTokenBalance[];
}) =>
  usersData.map<User>((userDataItem) => {
    const address = extractValueFromKey(userDataItem.key);
    const balance = usersBalance.find(
      (usersBalance) => usersBalance.address === address,
    );

    return {
      address: extractValueFromKey(userDataItem.key),
      email: userDataItem.value,
      balance: balance ? balance.balance : 0,
    };
  });

export const updateUserBalance = (
  users: User[],
  updatedBalance: RawAccountTokenBalance,
) =>
  users.map((user) =>
    user.address === updatedBalance.address &&
    user.balance !== updatedBalance.balance
      ? {
          ...user,
          balance: updatedBalance.balance,
        }
      : user,
  );
