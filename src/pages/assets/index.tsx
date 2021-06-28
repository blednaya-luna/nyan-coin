import { useGate } from 'effector-react';
import React, { FC } from 'react';

import { AppBar } from 'containers/AppBar';
import { AssetList } from 'containers/AssetList';
import { AssetsSearchField } from 'containers/AssetsSearchField';
import { ExchangeAssetModal } from 'features/ExchangeAsset/ExchangeAssetModal';
import { IssueAsset } from 'features/IssueAsset';
import { AssetsPageGate } from 'stores/pages/assets';
import 'stores/pages/assets/init';

const Assets: FC = () => {
  useGate(AssetsPageGate);

  return (
    <>
      <AppBar title="Assets" searchComponent={<AssetsSearchField />} />
      <AssetList />
      <IssueAsset />
      <ExchangeAssetModal />
    </>
  );
};

export default Assets;
