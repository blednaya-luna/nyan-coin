import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  assetContainer: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.getContrastText(
      theme.palette.background.default,
    ),
  },
}));
