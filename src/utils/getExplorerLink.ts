import { EXPLORER_URL } from 'config';

export type Scope = 'tx' | 'assets';

export const getExplorerLink = (type: Scope, address: string) =>
  `${EXPLORER_URL}/${type}/${address}`;
