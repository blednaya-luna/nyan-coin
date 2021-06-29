import { attach, createEvent, restore } from 'effector';

import { DAPP_SCRIPT } from 'config';
import { callCallableFunctionWithFeeFx } from 'stores/dApp';
import { calcFee } from 'utils/calcFee';

export const setQuantity = createEvent<number>();
export const $quantity = restore(setQuantity, 0);

export const issueNyanTokenFx = attach<
  void,
  typeof $quantity,
  typeof callCallableFunctionWithFeeFx
>({
  effect: callCallableFunctionWithFeeFx,
  source: $quantity,
  mapParams: (_, quantity) => ({
    func: DAPP_SCRIPT.ISSUE_TOKEN,
    args: [
      {
        type: 'integer',
        value: quantity,
      },
    ],
    additionalFee: calcFee({ issue: true }),
  }),
});
