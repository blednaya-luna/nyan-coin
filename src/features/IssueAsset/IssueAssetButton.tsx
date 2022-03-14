import { Add } from '@material-ui/icons';
import React, { FC } from 'react';

import { Button } from 'components/Button';

import { openIssueAssetModal } from './model';

export const IssueAssetButton: FC = () => {
  return (
    <Button
      label="Issue asset"
      onClick={() => openIssueAssetModal()}
      startIcon={<Add />}
    />
  );
};
