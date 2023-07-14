import React from 'react';
import AddEditEmployee from '../Employee/addEditEmployee';
import CustomDialog from './customDialog';

const AddEditModal = ({ modalInfo, setModalInfo, type }) => {
    return(
        <>
            <CustomDialog
                dialogProps={{
                    open: modalInfo?.open,
                    onClose: ()=>{
                        setModalInfo({
                            open: false,
                            data: null,
                        })
                    },
                    'aria-labelledby': 'dialog-title',
                }}
                title={
                    type === 'Add'
                    ? 'Add Employee'
                    : 'Edit Employee'
                }
                content={<AddEditEmployee modalInfo={modalInfo} setModalInfo={setModalInfo} type={type} />}
            />
        </>
    );
}

export default AddEditModal;