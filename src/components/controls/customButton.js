import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ type, variant='text', onClick, btnText, color, classes='' }) => {
    return (
        <>
            <Button
                type={type}
                variant={variant}
                onClick={onClick}
                color={color}
            >
                {btnText}
            </Button>
        </>
    );
};

export default CustomButton;