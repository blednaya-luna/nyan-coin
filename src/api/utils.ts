export const fetcher = async (url: string) => {
  const response = await fetch(url);
  const json = await response.json();
  if (json.error) {
    return Promise.reject(json);
  }
  return Promise.resolve(json);
};

export type Match = {
  scope: string;
  key: string;
  value?: string;
};

export const buildKey = ({ scope, key, value }: Required<Match>) =>
  `${scope}_<${value}>_${key}`;

const buildRegexp = ({ scope, key, value = '.*' }: Match) =>
  `^${scope}_<${value}>_${key}$`;

const buildRegexps = (matches: Match[]) =>
  matches
    .reduce<string[]>((acc, match) => [...acc, buildRegexp(match)], [])
    .join('|');

export const buildMatches = (matches: Match | Match[]) =>
  Array.isArray(matches) ? buildRegexps(matches) : buildRegexp(matches);

export const extractValueFromKey = (key: string) => {
  const extractedValue = key.match('_<(.*?)>_');
  return extractedValue ? extractedValue[1] : '';
};
