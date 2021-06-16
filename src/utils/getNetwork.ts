export const getNetwork = (networkCode: string) => {
  switch (networkCode) {
    case 'T':
      return 'Testnet';
    case 'W':
      return 'Mainnet';
    case 'S':
      return 'Stagenet';
    default:
      return 'Custom';
  }
};
