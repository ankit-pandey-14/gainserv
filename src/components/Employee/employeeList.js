import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomPagination from '../CustomPagination';
import { deleteEmployee } from '../../redux/employeeSlice';
import CustomDialog from '../controls/customDialog';
import CustomTable from '../CustomTable';
import { employeeTableColumn } from '../../constants/employee';

const EmployeeList = ({ employeeData, setModalInfo }) => {
    const [deleteModal, setDeleteModal] = useState({
        open: false,
        data: null,
    });
    const dispatch = useDispatch();
    const [pagination, setPagination] = useState({
        offset: 0,
        limit: 3,
        current: 1,
    });

    return (
        <div className='mt-10'>
            <CustomTable
                dataSource={employeeData.slice(pagination.offset, (pagination?.offset + pagination.limit))}
                columns={ employeeTableColumn(
                    setModalInfo,
                    setDeleteModal,
                ) }
            />

            <CustomPagination
                pagination={pagination}
                setPagination={setPagination}
                total={employeeData?.length}
            />

            <CustomDialog
                dialogProps={{
                    open: deleteModal.open,
                    onClose: ()=>{
                        setDeleteModal({
                            open: false,
                            data: null,
                        })
                    },
                    'aria-labelledby': 'dialog-title',
                }}
                content = 'Are you Sure you want to Delete this Record'
                title={'Alert'}
                actions={true}
                cancelAction={ () => {
                    setDeleteModal({
                        open: false,
                        data: null,
                    })
                }}
                yesAction= { () => {
                    dispatch(deleteEmployee(deleteModal?.data))
                    setDeleteModal({
                        open: false,
                        data: null,
                    })
                }}
            />
        </div>
    );
};

export default EmployeeList;