import { TextField } from '@mui/material';
import React from 'react';

const CustomInput = ({
    label,
    name,
    value,
    error,
    touch,
    onBlur,
    onChange,
}) => {
    
    return(
        <>
            <TextField
                size='small'
                fullWidth
                variant='outlined'
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={error && touch}
            />
            {error && touch && <p className='form-error'>{error}</p>}
        </>
    );
};

export default CustomInput