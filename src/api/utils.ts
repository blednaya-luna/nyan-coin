export const fetcher = (url: string) => fetch(url);

type Match = {
  scope: string;
  key: string;
};

export const buildPattern = ({ scope, key }: Match) => {
  return `^${scope}_.*_${key}$`;
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
