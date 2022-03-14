import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));
