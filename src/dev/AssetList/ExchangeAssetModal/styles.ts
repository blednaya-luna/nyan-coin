import { fade, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  assetContainer: {
    backgroundColor: fade(theme.palette.primary.light, 0.2),
  },
}));
