import React, { Fragment } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useStyles } from './styles';
import { Chip } from '@material-ui/core';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

export const CheckboxesTags = () => {
    const classes = useStyles()
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags"
            options={top100Films} // TODO - use store from props
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}

            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        {...getTagProps({ index })}
                        className={classes.chip}
                        variant='outlined'
                        label={`${option.title}`}
                    />
                ))
            }
            renderOption={(option, { selected }) => (
                <Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        checked={selected}
                        className={classes.checkbox}
                    />
                    {option.title}
                </Fragment>
            )}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="recipient" helperText='Enter the recipient addres' />
            )}
        />
    );
}

export const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];