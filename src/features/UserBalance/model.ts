import { createEffect, createEvent, createStore } from 'effector';
import { createGate } from 'effector-react';

import { accountAssetBalance } from 'api';

import { UserBalanceItem, UserBalanceProps } from './types';

export const UserBalanceGate = createGate<UserBalanceProps>();

export const loadUserBalance = createEvent<Pick<UserBalanceProps, 'address'>>();

export const fetchUserBalanceFx = createEffect<
  Pick<UserBalanceProps, 'address'>,
  UserBalanceItem
>(({ address }) => accountAssetBalance({ address }));

export const $userBalances = createStore<{
  [address: string]: UserBalanceItem['balance'];
}>({}).on(fetchUserBalanceFx.doneData, (userBalances, response) => ({
  ...userBalances,
  [response.address]: response.balance,
}));
