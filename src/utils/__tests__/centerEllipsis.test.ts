import { centerEllipsis } from '../centerEllipsis';

describe('centerEllipsis', () => {
  describe('default', () => {
    test('string length > default symbols count', () => {
      const actual = centerEllipsis('abcdefghijklmnopqrstuvwxyz');

      expect(actual).toBe('abcdefgh...stuvwxyz');
      expect(actual.length).toBe(16 + 3); // default symbols + ...
    });

    test('string length < default symbols count', () => {
      const payload = 'abcdefghij';
      const actual = centerEllipsis(payload);

      expect(actual).toBe(payload);
      expect(actual.length).toBe(payload.length);
    });
  });

  describe('with provided symbols count', () => {
    test('string length > symbols count', () => {
      const symbols = 12;
      const actual = centerEllipsis('abcdefghijklmnopqrstuvwxyz', symbols);

      expect(actual).toBe('abcdef...uvwxyz');
      expect(actual.length).toBe(symbols + 3); // symbols + ...
    });

    test('string length < symbols count', () => {
      const payload = 'abcdefghij';
      const actual = centerEllipsis(payload, 12);

      expect(actual).toBe(payload);
      expect(actual.length).toBe(payload.length);
    });
  });
});
