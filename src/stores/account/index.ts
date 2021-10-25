import { createEvent, restore, createEffect, forward } from 'effector';
import { combineEvents } from 'patronum';

import { accountTokenBalance } from 'api/account';
import { RawAccountTokenBalance } from 'api/account/types';
import { dAppDataByPatter } from 'api/dApp';
import { DAPP_DATA } from 'config';
import { User } from 'stores/users/types';
import { Nullable } from 'utils/types';

import { parseUser } from './utils';

export const setAddress = createEvent<string>();

export const setIsScripted = createEvent<boolean>();
export const $isScripted = restore(setIsScripted, false);

export const $fee = $isScripted.map(($isScripted) =>
  $isScripted ? 0.009 : 0.005,
);

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

forward({
  from: setAddress,
  to: [fetchUserDataFx, fetchUserBalanceFx],
});
