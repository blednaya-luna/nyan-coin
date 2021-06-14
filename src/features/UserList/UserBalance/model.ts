import { MouseEvent } from 'react';
import { createGate } from 'effector-react';
import {
  createEffect,
  createEvent,
  createStore,
  guard,
  attach,
  forward,
} from 'effector';

import { accountAssetBalance } from 'api';

import { UserBalanceProps } from './types';

export const UserBalanceGate = createGate<Required<UserBalanceProps>>();

export const loadUserBalance = createEvent<MouseEvent>();

type UserBalanceItem = {
  address: string;
  asset: string;
  balance: number;
};

const fetchUserBalanceFx = createEffect<
  Required<UserBalanceProps>,
  UserBalanceItem
>(({ address }) => accountAssetBalance({ address }));

export const $userBalances = createStore<{
  [address: string]: UserBalanceItem['balance'];
}>({}).on(fetchUserBalanceFx.doneData, (userBalances, response) => ({
  ...userBalances,
  [response.address]: response.balance,
}));

guard({
  source: UserBalanceGate.open,
  filter: UserBalanceGate.state.map(({ fetchOnMount }) => fetchOnMount),
  target: fetchUserBalanceFx,
});

forward({
  from: loadUserBalance,
  to: attach({
    effect: fetchUserBalanceFx,
    source: UserBalanceGate.state,
  }),
});
