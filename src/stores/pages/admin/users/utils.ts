import { RawAccountTokenBalanceItem } from 'api/account/types';
import { extractValueFromKey } from 'api/utils';

import { User } from './types';

export const parseUsers = ({
  usersData,
  usersBalance,
}: {
  usersData: WavesKeeper.TStringData[];
  usersBalance: RawAccountTokenBalanceItem[];
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
  updatedBalance: RawAccountTokenBalanceItem,
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
