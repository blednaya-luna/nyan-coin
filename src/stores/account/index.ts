import { createEvent, restore, createEffect, createStore } from 'effector';

import { RawDAppDataItem } from 'api/types';
import { dAppDataByPatter } from 'api';
import { buildPattern } from 'api/utils';
import { dAppScopeKeys } from 'api/constants';

import { copyAddressToClipboard } from './utils';

export const setAddress = createEvent<string>();
export const $address = restore(setAddress, null);

export const setNetwork = createEvent<WavesKeeper.TPublicStateNetwork>();
export const $network = restore(setNetwork, null);

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
        ...dAppScopeKeys.user.email,
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
