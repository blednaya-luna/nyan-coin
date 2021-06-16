import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    checkbox: {
        color: '#D7D9E1',
        '&.Mui-checked': {
            color: '#DBCD4F',
        },
    },
    chip: {
        color: '#000',
        backgroundColor: '#fff',
        borderColor: '#DBCD4F'
    },
}));
