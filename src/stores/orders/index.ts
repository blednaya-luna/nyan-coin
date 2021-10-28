import { createEffect, forward } from 'effector';
import { createGate } from 'effector-react';

import { dAppDataByPatter } from 'api/dApp';
import { DAPP_DATA } from 'config';

export type OrdersGateProps = {
  address: string;
};

export const OrdersGate = createGate<OrdersGateProps>();

// TODO implements, its worked prototype
export const fetchOrdersFx = createEffect(() =>
  dAppDataByPatter({
    ...DAPP_DATA.order.data,
  }),
);
fetchOrdersFx.doneData.watch(console.table);

forward({
  from: OrdersGate.open,
  to: fetchOrdersFx,
});
