import { createEffect, restore, sample } from 'effector';
import { createGate } from 'effector-react';
import { combineEvents } from 'patronum';

import { accountTokenBalance } from 'api/account';
import { RawAccountTokenBalance } from 'api/account/types';
import { dAppDataByPatter } from 'api/dApp';
import { DAPP_DATA } from 'config';
import { Nullable } from 'utils/types';

import { User } from '../users/types';
import { parseUser } from './utils';

export type UserGateProps = {
  address: string;
};

export const UserGate = createGate<UserGateProps>();

export const fetchUserDataFx = createEffect<string, WavesKeeper.TStringData[]>(
  (address) =>
    dAppDataByPatter({
      ...DAPP_DATA.user.email,
      value: address,
    }),
);

const fetchUserBalanceFx = createEffect<string, RawAccountTokenBalance>(
  (address) => accountTokenBalance({ address }),
);

export const userLoaded = combineEvents({
  events: {
    userData: fetchUserDataFx.doneData,
    userBalance: fetchUserBalanceFx.doneData,
  },
}).map(parseUser);

export const $user = restore<Nullable<User>>(userLoaded, null);

sample({
  clock: UserGate.open,
  source: UserGate.state,
  fn: ({ address }) => address,
  target: [fetchUserDataFx, fetchUserBalanceFx],
});
