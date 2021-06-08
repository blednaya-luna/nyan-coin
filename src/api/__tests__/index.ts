import {
  dAppDataByPatter,
  buildPattern,
  buildPatterns,
  extractValueFromKey,
} from '..';

test('buildPattern', () => {
  const actual = buildPattern({ scope: 'asset', key: 'data' });
  const expected = '^asset_.*_data$';

  expect(actual).toBe(expected);
});

test('buildPatterns', () => {
  const actual = buildPatterns([
    { scope: 'asset', key: 'data' },
    { scope: 'asset', key: 'price' },
  ]);
  const expected = '^asset_.*_data$|^asset_.*_price$';

  expect(actual).toBe(expected);
});

test('accountDataByPattern', async () => {
  const pattern = '^asset_.*_data$';

  const result = await dAppDataByPatter(pattern);
});

test('extractValueFromKey', () => {
  const key = 'user_3N75TCPSJArvzyQTAp3zWLAuZ4jpYB1nrpA_email';

  const actual = extractValueFromKey(key);
  const expected = '3N75TCPSJArvzyQTAp3zWLAuZ4jpYB1nrpA';

  expect(actual).toBe(expected);
});
