import { useGate, useStoreMap } from 'effector-react';
import React, { FC } from 'react';

import { Balance, BalanceProps } from 'components/Balance';

import { UserBalanceGate, refreshUserBalance, $userBalances } from './model';

export type UserBalanceProps = {
  address: string;
  fetchOnMount?: boolean;
};

export const UserBalance: FC<
  UserBalanceProps & Pick<BalanceProps, 'disableTypography'>
> = ({ disableTypography, ...props }) => {
  useGate(UserBalanceGate, props);
  const balance = useStoreMap({
    store: $userBalances,
    keys: [props.address],
    fn: (userBalances, [address]) => userBalances[address] || null,
  });

  return (
    <Balance
      balance={balance}
      refreshBalance={() => refreshUserBalance({ address: props.address })}
      disableTypography={disableTypography}
    />
  );
};
