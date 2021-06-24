import React, { FC, ReactNode } from 'react';
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  DialogActions,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { IconButton } from 'components/IconButton';

import { useStyles } from './styles';

type DialogProps = {
  open: boolean;
  onClose?: () => void;
  title: string;
  content: ReactNode;
  actions?: ReactNode;
};

export const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  title,
  content,
  actions,
}) => {
  const classes = useStyles();

  return (
    <MuiDialog open={open} onClose={onClose} fullWidth>
      <DialogTitle disableTypography>
        <Grid container justify="center">
          <Typography variant="h6">{title}</Typography>
          <IconButton
            className={classes.closeButton}
            Icon={Close}
            iconFontSize="default"
            onClick={onClose}
          />
        </Grid>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MuiDialog>
  );
};
