import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = (props) => {
    const { variant, onClick, btnText, ...others } = props;

    return (
        <>
            <Button
                variant={variant || 'text'}
                onClick={onClick}
                {...others}
            >
                {btnText}
            </Button>
        </>
    );
};

export default CustomButton;