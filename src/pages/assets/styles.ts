import { makeStyles, Theme, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(1),
    backgroundColor: fade(theme.palette.primary.light, 0.2),
  },
}));
