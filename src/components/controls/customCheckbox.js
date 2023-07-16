import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import React from 'react';

const CustomCheckbox = ({
    label,
    name,
    value,
    onChange,
}) => {
    return (
        <>
            <FormControl fullWidth size='small'>
                <FormControlLabel
                    label={label}
                    control={
                        <Checkbox
                            size='small'
                            value={value}
                            checked={value}
                            name={name}
                            color='primary'
                            onChange={onChange}
                        />
                    }
                />
            </FormControl>
        </>
    );
};

export default CustomCheckbox;