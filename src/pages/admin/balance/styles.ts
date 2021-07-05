import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  balance: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reissueToken: {
    marginTop: theme.spacing(2),
  },
}));
