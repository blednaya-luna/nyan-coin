import React, { FC } from 'react';

import { Button } from 'components/Button';
import { Asset } from 'stores/assets/types';

import { selectAssetToReissue } from './model';

type ReissueAssetButtonProps = {
  asset: Asset;
};

export const ReissueAssetButton: FC<ReissueAssetButtonProps> = ({ asset }) => {
  return (
    <Button label="Reissue asset" onClick={() => selectAssetToReissue(asset)} />
  );
};
