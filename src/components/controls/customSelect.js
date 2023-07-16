import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const CustomSelect = ({
    label,
    name,
    value,
    error,
    touch,
    onChange,
    onBlur,
    options,
}) => {

    return (
        <>
            <FormControl fullWidth size='small'>
                <InputLabel id="select-label">{label}</InputLabel>
                <Select
                    fullWidth
                    labelId="select-label"
                    id="select"
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error && touch}
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

export default CustomSelect;