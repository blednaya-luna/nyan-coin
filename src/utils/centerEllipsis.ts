export const centerEllipsis = (string: string, symbols = 16) => {
  if (string.length <= symbols) {
    return string;
  }
  return `${string.slice(0, symbols / 2)}...${string.slice(-symbols / 2)}`;
};
