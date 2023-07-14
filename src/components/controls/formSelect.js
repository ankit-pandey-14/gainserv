import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const FormSelect = ({label, name, handleChange, handleBlur, error, touch, value, options}) => {

    return (
        <>
            <FormControl sx={{width: '90%' }}>
                <InputLabel id="select-label">{label}</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    label={label}
                    size='small'
                    name={name}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    {
                        options?.map((option, index) => (
                            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            {error && touch && <p className='form-error'>{error}</p>}
        </>
    );
};

export default FormSelect;