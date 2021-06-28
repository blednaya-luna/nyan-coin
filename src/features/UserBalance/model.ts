import {
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
} from 'effector';
import { createGate } from 'effector-react';

import { accountTokenBalance } from 'api/account';
import { RawAccountTokenBalanceItem } from 'api/account/types';

import { UserBalanceProps } from '.';

export const UserBalanceGate = createGate<UserBalanceProps>();

export const refreshUserBalance =
  createEvent<Pick<UserBalanceProps, 'address'>>();

export const fetchUserBalanceFx =
  createEffect<Pick<UserBalanceProps, 'address'>, RawAccountTokenBalanceItem>(
    accountTokenBalance,
  );

export const $userBalances = createStore<{
  [address: string]: number;
}>({}).on(fetchUserBalanceFx.doneData, (userBalances, response) => ({
  ...userBalances,
  [response.address]: response.balance,
}));

guard({
  source: UserBalanceGate.open,
  filter: UserBalanceGate.state.map(
    ({ fetchOnMount }) => fetchOnMount || false,
  ),
  target: fetchUserBalanceFx,
});

forward({
  from: refreshUserBalance,
  to: fetchUserBalanceFx,
});
