import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React from 'react';
import CustomButton from './customButton';

const CustomDialog = ({ dialogProps, title, content, actions, cancelAction, yesAction }) => {
    return (
        <>
        
            <Dialog {...dialogProps}>
                <DialogTitle id='dialog-title'>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {content}
                </DialogContent>
                {
                    actions && (
                        <DialogActions>
                            <CustomButton
                                onClick={cancelAction}
                                btnText='Cancel'
                            />
                            <CustomButton
                                onClick={yesAction}
                                btnText='Yes'
                                color='error'
                            />
                        </DialogActions>
                    )
                }
            </Dialog>
        </>
    );
};

export default CustomDialog;