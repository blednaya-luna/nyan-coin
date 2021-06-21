import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.grey.A100,
    '& > div': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    '& > div:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  address: {
    display: 'flex',
    alignItems: 'center',
  },
}));
