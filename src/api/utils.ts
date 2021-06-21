export const fetcher = (url: string) => fetch(url);

type Match = {
  scope: string;
  key: string;
  value?: string;
};

export const buildPattern = ({ scope, key, value = '.*' }: Match) => {
  return `^${scope}_${value}_${key}$`;
};

export const buildPatterns = (matches: Match[]) => {
  return matches
    .reduce<string[]>((acc, match) => [...acc, buildPattern(match)], [])
    .join('|');
};

export const extractValueFromKey = (key: string) => {
  const extractedValue = key.match('_(.*?)_');
  return extractedValue ? extractedValue[1] : '';
};
