import { calcFee } from '../calcFee';

describe('calcFee', () => {
  test('default', () => {
    expect(calcFee({})).toBe(0);
  });

  test('when issue', () => {
    expect(calcFee({ issue: true })).toBe(1);
  });
});
