import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  leftBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: theme.spacing(0, 1),
  },
  rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0, 1),
  },
}));
