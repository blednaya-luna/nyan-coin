import React, { FC } from 'react';
import { useGate, useStoreMap } from 'effector-react';

import { Balance } from 'components/Balance';

import {
  UserBalanceGate,
  loadUserBalance as refreshUserBalance,
  $userBalances,
} from './model';
import './init.model';
import { UserBalanceProps } from './types';

export const UserBalance: FC<UserBalanceProps> = (props) => {
  useGate(UserBalanceGate, props);
  const balance = useStoreMap({
    store: $userBalances,
    keys: [props.address],
    fn: (userBalances, [address]) => userBalances[address] || null,
  });

  return <Balance balance={balance} refreshBalance={refreshUserBalance} />;
};
