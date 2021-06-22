import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
}));
