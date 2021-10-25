import {
  createEvent,
  createStore,
  restore,
  createEffect,
  forward,
  attach,
} from 'effector';
import { createGate } from 'effector-react';

import { dAppTokenBalance } from 'api/dApp';
import { RawDAppTokenBalance } from 'api/dApp/types';
import { ApiError } from 'api/types';
import { DAPP_SCRIPT } from 'config';
import { invokeScriptWithFeeFx } from 'stores/keeper';

export const BalanceGate = createGate();

const fetchDAppBalance =
  createEffect<void, RawDAppTokenBalance, ApiError>(dAppTokenBalance);

export const $dAppBalance = restore(
  fetchDAppBalance.doneData.map((data) => data.balance),
  0,
);

export const refreshDAppBalance = createEvent();

export const openReissueTokenView = createEvent();
export const closeReissueTokenView = createEvent();
export const $reissueTokenViewIsOpen = createStore(false)
  .on(openReissueTokenView, () => true)
  .on(closeReissueTokenView, () => false);

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0)
  .reset(refreshDAppBalance)
  .reset(closeReissueTokenView);

export const reissueTokenFx = attach<
  void,
  typeof $quantity,
  typeof invokeScriptWithFeeFx
>({
  effect: invokeScriptWithFeeFx,
  source: $quantity,
  mapParams: (_, quantity) => ({
    func: DAPP_SCRIPT.REISSUE_TOKEN,
    args: [
      {
        type: 'integer',
        value: quantity,
      },
    ],
  }),
});

forward({
  from: BalanceGate.open,
  to: fetchDAppBalance,
});

forward({
  from: refreshDAppBalance,
  to: fetchDAppBalance,
});

forward({
  from: reissueTokenFx.done,
  to: closeReissueTokenView,
});
