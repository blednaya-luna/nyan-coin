import { Add } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';
import { Asset } from 'stores/assets/types';

import { selectAssetToReissue } from './model';

type ReissueAssetButtonProps = {
  asset: Asset;
};

export const ReissueAssetButton: FC<ReissueAssetButtonProps> = ({ asset }) => {
  return (
    <IconButton
      title="Reissue asset"
      Icon={Add}
      onClick={() => selectAssetToReissue(asset)}
    />
  );
};
