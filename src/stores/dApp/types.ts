type CallCallableFunctionPayload = {
  func: string;
  args: WavesKeeper.TCallArgs[];
  payment?: WavesKeeper.TMoney[];
};

export type CallCallableFunctionFxPayload = CallCallableFunctionPayload & {
  fee: number;
};

export type CallCallableFunctionWithFeeFxPayload =
  CallCallableFunctionPayload & {
    additionalFee?: number;
  };
