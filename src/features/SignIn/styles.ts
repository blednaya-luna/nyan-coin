import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  dialogContentContainer: {
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));
