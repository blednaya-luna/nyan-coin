import { Fab, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { FC } from 'react';

import { openIssueAssetModal } from './model';
import { useStyles } from './styles';

export const IssueAssetButton: FC = () => {
  const classes = useStyles();

  return (
    <Tooltip title="Issue asset">
      <Fab
        className={classes.fab}
        color="primary"
        onClick={openIssueAssetModal}
      >
        <Add />
      </Fab>
    </Tooltip>
  );
};
