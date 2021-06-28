import React, { FC } from 'react';

import { AssetItem } from 'stores/pages/assets/types';

import { ExchangeAssetModal } from './ExchangeAssetModal';
import { selectAssetToExchange } from './model';

type ExchangeAssetProps = {
  children: (props: {
    selectAssetToExchange: (asset: AssetItem) => void;
  }) => JSX.Element;
};

export const ExchangeAsset: FC<ExchangeAssetProps> = ({ children }) => {
  return (
    <>
      {children({
        selectAssetToExchange,
      })}
      <ExchangeAssetModal />
    </>
  );
};
