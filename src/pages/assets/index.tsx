import React, { FC } from 'react';
import { useGate } from 'effector-react';

import { AppBar } from 'components/AppBar';
import { AssetsSearchField } from 'features/assets/AssetList/AssetsSearchField';
import { AssetList } from 'features/assets/AssetList';
import { AssetsPageGate } from 'stores/pages/assets';
import 'stores/pages/assets/init';

const Assets: FC = () => {
  useGate(AssetsPageGate);

  return (
    <>
      <AppBar title="Assets" search={<AssetsSearchField />} />
      <AssetList />
    </>
  );
};

export default Assets;
