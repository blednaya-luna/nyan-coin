export type SendTxDone = {
  dApp: string;
  id: string;
  sender: string;
  senderPublicKey: string;
  timestamp: number;
};

export type SendTxFail = {
  code: string;
  data: string;
  message: string;
};

type ScriptInvocationCall = {
  func: string;
  args: WavesKeeper.TCallArgs[];
};

export type ScriptInvocation = ScriptInvocationCall & {
  payment?: WavesKeeper.TMoney[];
  fee: number;
};

export type ScriptInvocationWithFee = ScriptInvocationCall & {
  payment?: WavesKeeper.TMoney[];
  additionalFee?: number;
};
