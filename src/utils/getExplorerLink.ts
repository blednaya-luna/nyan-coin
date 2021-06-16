export const getExplorerLink = (
  networkCode: string,
  address: string,
  type: 'tx',
) => {
  switch (networkCode) {
    case 'T':
      return `https://wavesexplorer.com/testnet/${type}/${address}`;
    case 'W':
      return `https://wavesexplorer.com/${type}/${address}`;
    case 'S':
      return `https://wavesexplorer.com/stagenet/${type}/${address}`;
    default:
      return `https://wavesexplorer.com/custom/${type}/${address}`;
  }
};
