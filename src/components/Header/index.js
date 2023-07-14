import React from 'react';
import Grid from '@mui/material/Grid';

const Header = () => {
    return (
        <div className='d-flex header'>
            <Grid container className='d-flex'>
                <Grid item sm={12}>
                    <h2>Hi Admin</h2>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;