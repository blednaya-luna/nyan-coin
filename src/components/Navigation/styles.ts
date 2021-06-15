import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        padding: '0px 24px'
    },
    navItem: {
        padding: '0 15px',
        height: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#000',
        '&:hover': {
            borderBottom: '1px solid rgba(246, 173, 85, 0.4)'
        }
    },
    active: {
        color: '#ff9f0a',
        borderBottom: '1px solid #f6ad55'
    }
}));
