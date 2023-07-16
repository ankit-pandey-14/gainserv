import React from 'react';
import get from 'lodash/get';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CustomButton from './customButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { USER_DELETED } from '../../constants/message';

const CustomDialog = ({
    dialogProps,
    title,
    content,
    actions,
    cancelAction,
    yesAction,
    notification,
    setNotification,
}) => {
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
                                onClick={() => {
                                    yesAction();
                                    setNotification({
                                        visible: true,
                                        messege: USER_DELETED,
                                    });
                                }}
                                btnText='Yes'
                                color='error'
                            />
                        </DialogActions>
                    )
                }
            </Dialog>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={get(notification, 'visible')}
                autoHideDuration={3000}
                onClose={() => {
                    setNotification({
                        visible: false,
                        messege: null,
                    })
                }}
            >
                <Alert
                    onClose={() => {
                        setNotification({
                            visible: false,
                            messege: null,
                        })
                    }}
                    severity="success"
                >
                    {get(notification, 'messege')}
                </Alert>
            </Snackbar>
        </>
    );
};

export default CustomDialog;