import { buildPattern, buildPatterns, extractValueFromKey } from 'api/utils';

test('buildPattern', () => {
  const actual = buildPattern({ scope: 'asset', key: 'data' });
  const expected = { pattern: '^asset_.*_data$' };

  expect(actual).toEqual(expected);
});

test('buildPatterns', () => {
  const actual = buildPatterns([
    { scope: 'asset', key: 'data' },
    { scope: 'asset', key: 'price' },
  ]);
  const expected = { pattern: '^asset_.*_data$|^asset_.*_price$' };

  expect(actual).toEqual(expected);
});

test('extractValueFromKey', () => {
  const key = 'user_3N75TCPSJArvzyQTAp3zWLAuZ4jpYB1nrpA_email';

  const actual = extractValueFromKey(key);
  const expected = '3N75TCPSJArvzyQTAp3zWLAuZ4jpYB1nrpA';

  expect(actual).toBe(expected);
});
