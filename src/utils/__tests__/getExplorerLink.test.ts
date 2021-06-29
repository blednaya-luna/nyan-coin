import { getExplorerLink } from '../getExplorerLink';

describe('getExplorerLink', () => {
  test('tx', () => {
    expect(getExplorerLink('tx', 'address')).toBe(
      'https://testnet.wavesexplorer.com/tx/address',
    );
  });

  test('assets', () => {
    expect(getExplorerLink('assets', 'address')).toBe(
      'https://testnet.wavesexplorer.com/assets/address',
    );
  });
});
