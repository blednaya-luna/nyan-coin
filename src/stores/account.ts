import { createEvent, restore, createEffect } from 'effector';
import copyToClipboard from 'copy-to-clipboard';

import { notify } from 'utils/notify';

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

export const copyAddressToClipboardFx = createEffect((address: string) => {
  copyToClipboard(address);
  notify.info({
    title: 'Address copied!',
  });
});
