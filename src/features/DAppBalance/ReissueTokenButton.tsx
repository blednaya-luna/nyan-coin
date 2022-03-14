import React, { FC } from 'react';

import { Button } from 'components/Button';
import { Asset } from 'stores/assets/types';

type ReissueTokenButtonProps = {
  asset: Asset;
};

export const ReissueTokenButton: FC<ReissueTokenButtonProps> = ({ asset }) => {
  return <Button label="Reissue token" />;
};
