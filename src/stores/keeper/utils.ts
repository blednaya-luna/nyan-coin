import { nodeInteraction } from '@waves/waves-transactions';

import { setAddress, setIsScripted } from '../account';

export const updateWavesKeeper = async (
  publicState: WavesKeeper.IPublicStateResponse,
) => {
  if (publicState.account) {
    setAddress(publicState.account.address);

    const scriptInfo = await nodeInteraction.scriptInfo(
      publicState.account.address,
      publicState.network.server,
    );
    const isScripted = scriptInfo.script !== null;
    setIsScripted(isScripted);
  }
};
