import { attach, createEvent, restore } from 'effector';

import { argType, dAppScript } from 'api/constants';
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
    func: dAppScript.issueToken,
    args: [
      {
        type: argType.integer,
        value: quantity,
      },
    ],
    additionalFee: calcFee({ issue: true }),
  }),
});
