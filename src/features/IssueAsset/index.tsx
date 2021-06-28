import React, { FC } from 'react';

import { IssueAssetButton } from './IssueAssetButton';
import { IssueAssetModal } from './IssueAssetModal';

export const IssueAsset: FC = () => {
  return (
    <>
      <IssueAssetButton />
      <IssueAssetModal />
    </>
  );
};
