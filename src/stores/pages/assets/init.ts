import { forward } from 'effector';

import { AssetsPageGate, fetchAssetsDataFx, fetchDAppAssetsBalanceFx } from '.';

forward({
  from: AssetsPageGate.open,
  to: fetchAssetsDataFx,
});

forward({
  from: AssetsPageGate.open,
  to: fetchDAppAssetsBalanceFx,
});
