type CalcFeePayload = {
  issue?: boolean;
};

export const calcFee = ({ issue }: CalcFeePayload) => {
  if (issue) {
    return 1;
  }

  return 0;
};
