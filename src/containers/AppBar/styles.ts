import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  iconButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    margin: theme.spacing(0, 1),
  },
}));
