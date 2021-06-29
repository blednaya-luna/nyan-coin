import { EXPLORER_URL } from 'config';

export type Scope = 'tx' | 'assets' | 'address';
export type AddressScope =
  | 'tx'
  | 'aliases'
  | 'assets'
  | 'nft'
  | 'data'
  | 'script';

export const getExplorerLink = (
  scope: Scope,
  id: string,
  type?: AddressScope,
) =>
  type
    ? `${EXPLORER_URL}/${scope}/${id}/${type}`
    : `${EXPLORER_URL}/${scope}/${id}`;
