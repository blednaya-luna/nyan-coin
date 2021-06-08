import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(1),

    '& > div:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  networkIcon: {
    marginRight: theme.spacing(0.5),
  },
}));
