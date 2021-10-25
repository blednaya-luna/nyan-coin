import { buildRegexp, buildRegexps, extractValueFromKey } from 'api/utils';

test('buildRegexp', () => {
  const actual = buildRegexp({ scope: 'asset', key: 'data' });
  const expected = '^asset_<.*>_data$';

  expect(actual).toEqual(expected);
});

test('buildRegexps', () => {
  const actual = buildRegexps([
    { scope: 'asset', key: 'data' },
    { scope: 'asset', key: 'price' },
  ]);
  const expected = '^asset_<.*>_data$|^asset_<.*>_price$';

  expect(actual).toEqual(expected);
});

test('extractValueFromKey', () => {
  const key = 'user_<3N75TCPSJArvzyQTAp3zWLAuZ4jpYB1nrpA>_email';

  const actual = extractValueFromKey(key);
  const expected = '3N75TCPSJArvzyQTAp3zWLAuZ4jpYB1nrpA';

  expect(actual).toBe(expected);
});
