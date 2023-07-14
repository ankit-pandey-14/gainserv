import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';

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
                            <Button onClick={cancelAction}>Canel</Button>
                            <Button onClick={yesAction}>
                                Yes
                            </Button>
                        </DialogActions>
                    )
                }
            </Dialog>
        </>
    );
};

export default CustomDialog;