import { Add } from '@material-ui/icons';
import React, { FC } from 'react';

import { IconButton } from 'components/IconButton';
import { AssetItem } from 'stores/pages/assets/types';

import { selectAssetToReissue } from './model';

type ReissueAssetButtonProps = {
  asset: AssetItem;
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
