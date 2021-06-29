import { attach, createEvent, restore } from 'effector';

import { DAPP_SCRIPT } from 'config';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0);

export const reissueNyanTokenFx = attach<
  void,
  typeof $quantity,
  typeof callCallableFunctionWithFeeFx
>({
  effect: callCallableFunctionWithFeeFx,
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
