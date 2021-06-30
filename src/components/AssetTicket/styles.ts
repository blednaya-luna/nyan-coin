import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    width: 300,
    height: 100,
    margin: theme.spacing(1),
    cursor: 'pointer',
    '& $moveLeft, $moveRight': {
      transition: '0.3s',
    },
    '&:hover': {
      '& $moveLeft': {
        transform: `translateX(-${theme.spacing(1)}px)`,
      },
      '& $moveRight': {
        transform: `translateX(${theme.spacing(1)}px)`,
      },
    },
  },
  cardLeftSide: {
    display: 'flex',
  },
  cardRightSide: {
    display: 'flex',
    flex: 1,
  },
  moveLeft: {}, // it is needed for animation
  moveRight: {}, // it is needed for animation
  cardContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  cardLeftContent: {
    width: 70,
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(1),
  },
  cardRightContent: {
    alignItems: 'flex-start',
    borderTopRightRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
  },
  dividerContainer: {
    position: 'relative',
    width: theme.spacing(1),
    margin: `${theme.spacing(1)}px 0`,
    '&::before': {
      content: '""',
      width: theme.spacing(1),
      height: theme.spacing(2),
      position: 'absolute',
      top: -theme.spacing(2),
      backgroundColor: 'transparent',
      boxShadow: `0 ${theme.spacing(1)}px 0 0 ${
        theme.palette.background.paper
      }`,
    },
    '&::after': {
      content: '""',
      width: theme.spacing(1),
      height: theme.spacing(2),
      position: 'absolute',
      bottom: -theme.spacing(2),
      backgroundColor: 'transparent',
      boxShadow: `0 -${theme.spacing(1)}px 0 0 ${
        theme.palette.background.paper
      }`,
    },
  },
  dividerLeftContainer: {
    '&::before': {
      borderBottomLeftRadius: theme.spacing(1),
    },
    '&::after': {
      borderTopLeftRadius: theme.spacing(1),
    },
  },
  dividerRightContainer: {
    '&::before': {
      borderBottomRightRadius: theme.spacing(1),
    },
    '&::after': {
      borderTopRightRadius: theme.spacing(1),
    },
  },
  divider: {
    position: 'absolute',
    width: theme.spacing(1),
    height: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  splitter: {
    position: 'absolute',
    top: theme.spacing(1),
    height: '100%',
    borderRightWidth: theme.spacing(0.5),
    borderRightStyle: 'dotted',
    borderRightColor: theme.palette.grey['700'],
  },
  leftSplitter: {
    right: 0,
    transform: 'translateX(50%)',
  },
  rightSplitter: {
    transform: 'translateX(-50%)',
  },
}));
