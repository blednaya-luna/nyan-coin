import { RawAccountTokenBalance } from 'api/account/types';
import { extractValueFromKey } from 'api/utils';
import { User } from 'stores/users/types';
import { Nullable } from 'utils/types';

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
