import { RawAccountTokenBalance } from 'api/account/types';
import { extractValueFromKey } from 'api/utils';

import { User } from './types';

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
