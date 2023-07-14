import React, { useState } from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch } from 'react-redux';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomPagination from '../CustomPagination';
import { deleteEmployee } from '../../redux/employeeSlice';
import CustomDialog from '../controls/customDialog';

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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            employeeData?.slice(pagination.offset, (pagination?.offset + pagination.limit))?.map((emp) => (
                                <TableRow
                                    key={emp?.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {emp.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {emp.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {emp.email}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {emp.mobile}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {emp.city}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {emp.role}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <span
                                            style={{cursor: 'pointer'}}
                                            onClick={() => {
                                                setModalInfo({
                                                    open: true,
                                                    data: emp,
                                                })
                                            }}
                                        >
                                            <ModeEditIcon />
                                        </span>
                                        <span
                                            style={{cursor: 'pointer'}}
                                            onClick={() => {
                                                setDeleteModal({
                                                    open: true,
                                                    data: emp.id,
                                                })
                                            }}
                                        >
                                            <DeleteIcon />
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

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