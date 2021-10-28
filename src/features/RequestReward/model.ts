import { createEvent, restore, guard, attach, forward } from 'effector';

import { DAPP_SCRIPT } from 'config';
import { Asset } from 'stores/assets/types';
import { invokeScriptWithFeeFx } from 'stores/keeper';

export const selectAssetToRequestReward = createEvent<Asset>();
export const resetAssetToRequestReward = createEvent();
export const $assetToRequestReward = restore(
  selectAssetToRequestReward,
  null,
).reset(resetAssetToRequestReward);

export const $requestRewardModalIsOpen = $assetToRequestReward.map(Boolean);

export const setAmount = createEvent<number>();
export const $amount = restore(setAmount, 1).reset(resetAssetToRequestReward);

export const requestReward = createEvent();
export const requestRewardFx = guard({
  clock: requestReward,
  source: [$assetToRequestReward, $amount],
  filter: (source): source is [Asset, number] => {
    const [assetToRequestReward, amount] = source;
    return assetToRequestReward !== null && amount > 0;
  },
  target: attach<[Asset, number], typeof invokeScriptWithFeeFx>({
    effect: invokeScriptWithFeeFx,
    mapParams: ([assetToRequestReward, amount]) => ({
      func: DAPP_SCRIPT.REQUEST_REWARD,
      args: [],
      payment: [
        {
          assetId: assetToRequestReward.assetId,
          amount,
        },
      ],
    }),
  }),
});

forward({
  from: requestRewardFx.done,
  to: resetAssetToRequestReward,
});
