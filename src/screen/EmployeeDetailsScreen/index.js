import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME } from '../../constants/routes';
import CustomButton from '../../components/controls/customButton';

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const EmployeeDetailsScreen = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div className='mt-40 pl-9 pr-9'>
            <Grid container>
                <Grid item xs={12} className='text-center underline'>
                    <h2>Employee Details</h2>
                </Grid>

                <Grid item xs={12} className='mt-40'>
                    <Grid container>
                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6' className='emp-heading'>
                                Employee Id :
                            </Typography>

                            <Typography variant='p' className='emp-para'>
                                {state?.id}
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Employee Type :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.isPermanent ? 'Permanent' : 'Contract Basis'}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Name :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Email ID :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.email}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Contact Number :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.mobile}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Position (Post) :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.role}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Location (City ) :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.city}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className='d-flex'>
                            <Typography variant='h6'className='emp-heading'>
                                Gender :
                            </Typography>

                            <Typography variant='p'className='emp-para'>
                                {state?.gender}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <div className='mt-30 text-center'>
                <CustomButton
                    variant="outlined"
                    onClick={() => {
                        navigate(HOME);
                    }}
                    btnText="Back to home"
                    startIcon={ <KeyboardBackspaceOutlinedIcon /> }
                />
            </div>
        </div>
    );
};

export default EmployeeDetailsScreen;