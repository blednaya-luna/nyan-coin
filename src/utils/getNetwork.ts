export const getNetwork = (
  networkCode: WavesKeeper.TPublicStateNetwork['code'],
) => {
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
