import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
}));
