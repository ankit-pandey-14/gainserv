import { TextField } from '@mui/material';
import React from 'react';

const TextInput = ({label, name, error, touch, value, handleBlur, handleChange}) => {
    return(
        <>
            <TextField
                size='small'
                style={{width: '90%'}}
                variant='outlined'
                label={label}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && touch && <p className='form-error'>{error}</p>}
        </>
    );
};

export default TextInput