import { createEvent, restore, createEffect, createStore } from 'effector';

import { dAppDataByPatter } from 'api/dApp';
import { RawDAppDataItem } from 'api/dApp/types';
import { buildPattern } from 'api/utils';
import { DAPP_DATA } from 'config';

import { copyAddressToClipboard } from './utils';

export const setAddress = createEvent<string>();
export const $address = restore(setAddress, null);

export const setIsScripted = createEvent<boolean>();
export const $isScripted = restore(setIsScripted, false);

export const setIsAuthorized = createEvent<boolean>();
export const $isAuthorized = restore(setIsAuthorized, false);
export const $fee = $isScripted.map(($isScripted) =>
  $isScripted ? 0.009 : 0.005,
);

export const copyAddressToClipboardFx = createEffect(copyAddressToClipboard);

export const getUserDataFx = createEffect<string, RawDAppDataItem[]>(
  (address) =>
    dAppDataByPatter(
      buildPattern({
        ...DAPP_DATA.user.email,
        value: address,
      }),
    ),
);

export const $email = createStore<string | null>(null).on(
  getUserDataFx.doneData,
  (_, userData) => {
    if (userData.length === 1) {
      return userData[0].value;
    }
    return null;
  },
);
export const $isRegistered = $email.map((email) => email !== null);
