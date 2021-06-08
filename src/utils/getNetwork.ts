export const getNetwork = (url: string) => {
  switch (url) {
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
