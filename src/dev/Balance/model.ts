import { createEffect, createStore, forward } from 'effector';
import { createGate } from 'effector-react';

import { baseURL, dApp, nyanCoin } from 'api/constants';

export const Gate = createGate();

export const fetchDAppBalanceFx = createEffect(() =>
  fetch(`${baseURL}/assets/balance/${dApp}/${nyanCoin}`)
    .then((response) => response.json())
    .then((json) => json),
);

export const $dAppBalance = createStore(null).on(
  fetchDAppBalanceFx.doneData,
  (_, response) => response.balance,
);

forward({
  from: Gate.open,
  to: fetchDAppBalanceFx,
});
