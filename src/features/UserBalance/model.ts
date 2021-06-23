import { createEffect, createEvent, createStore } from 'effector';
import { createGate } from 'effector-react';

import { accountTokenBalance } from 'api/account';
import { RawAccountTokenBalanceItem } from 'api/account/types';

import { UserBalanceItem, UserBalanceProps } from './types';

export const UserBalanceGate = createGate<UserBalanceProps>();

export const loadUserBalance = createEvent<Pick<UserBalanceProps, 'address'>>();

export const fetchUserBalanceFx =
  createEffect<Pick<UserBalanceProps, 'address'>, RawAccountTokenBalanceItem>(
    accountTokenBalance,
  );

export const $userBalances = createStore<{
  [address: string]: UserBalanceItem['balance'];
}>({}).on(fetchUserBalanceFx.doneData, (userBalances, response) => ({
  ...userBalances,
  [response.address]: response.balance,
}));
