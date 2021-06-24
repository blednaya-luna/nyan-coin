import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  assetContainer: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.getContrastText(
      theme.palette.background.default,
    ),
    marginBottom: theme.spacing(2),
  },
}));
