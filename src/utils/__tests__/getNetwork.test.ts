import { getNetwork } from '../getNetwork';

test('getNetwork', () => {
  expect(getNetwork('T')).toBe('Testnet');

  expect(getNetwork('W')).toBe('Mainnet');

  expect(getNetwork('S')).toBe('Stagenet');

  expect(getNetwork('')).toBe('Custom');
});
