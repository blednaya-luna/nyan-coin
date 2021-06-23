export const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

type Match = {
  scope: string;
  key: string;
  value?: string;
};

export const buildPattern = ({ scope, key, value = '.*' }: Match) => ({
  pattern: `^${scope}_${value}_${key}$`,
});

export const buildPatterns = (matches: Match[]) => ({
  pattern: matches
    .reduce<string[]>((acc, match) => [...acc, buildPattern(match).pattern], [])
    .join('|'),
});

export const extractValueFromKey = (key: string) => {
  const extractedValue = key.match('_(.*?)_');
  return extractedValue ? extractedValue[1] : '';
};
