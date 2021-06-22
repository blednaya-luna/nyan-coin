export type UserBalanceProps = {
  address: string;
  fetchOnMount?: boolean;
};

export type UserBalanceItem = {
  address: string;
  asset: string;
  balance: number;
};
