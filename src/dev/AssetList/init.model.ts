import { forward } from 'effector';

import {
  AssetListGate,
  fetchAssetsDataFx,
  fetchDAppAssetsBalanceFx,
} from './model';

forward({
  from: AssetListGate.open,
  to: fetchAssetsDataFx,
});

forward({
  from: AssetListGate.open,
  to: fetchDAppAssetsBalanceFx,
});
