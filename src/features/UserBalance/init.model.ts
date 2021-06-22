import { forward, guard } from 'effector';

import { fetchUserBalanceFx, loadUserBalance, UserBalanceGate } from './model';

guard({
  source: UserBalanceGate.open,
  filter: UserBalanceGate.state.map(
    ({ fetchOnMount }) => fetchOnMount || false,
  ),
  target: fetchUserBalanceFx,
});

forward({
  from: loadUserBalance,
  to: fetchUserBalanceFx,
});
