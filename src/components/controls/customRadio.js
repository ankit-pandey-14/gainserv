import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const CustomRadio = ({
    row,
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
                <FormLabel>{label}</FormLabel>
                <RadioGroup
                    row={row}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    {
                        options.map((option, index) => (
                            <FormControlLabel
                                key={index}
                                value={option?.value}
                                control={<Radio size="small" />}
                                label={option?.label}
                            />
                        ))
                    }
                </RadioGroup>
            </FormControl>

            {error && touch && <p className='form-error'>{error}</p>}
        </>
    );
};

export default CustomRadio;