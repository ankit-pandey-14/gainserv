import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import CustomButton from '../components/controls/customButton';

export const employeeTableColumn = ( setModalInfo, setDeleteModal, navigate ) => [
    {
        title: 'Employee ID',
        key: 'emp_id',
        dataIndex: 'id'
    },
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name'
    },
    {
        title: 'Email',
        key: 'email_id',
        dataIndex: 'email'
    },
    {
        title: 'Actions',
        key: 'action',
        render: (record) => (
            <Stack direction='row' spacing={1}>
                <CustomButton
                    variant='outlined'
                    onClick={() => {
                        navigate(`/employee/${record?.id}`, { state: record })
                    }}
                    btnText="View"
                />
                <span
                    className='cursor-p'
                    onClick={() => { setModalInfo({ open: true, data: record, }) }}
                >
                    <ModeEditIcon />
                </span>
                <span
                    style={{cursor: 'pointer'}}
                    onClick={() => { setDeleteModal({ open: true, data: record.id, }) }}
                >
                    <DeleteIcon />
                </span>
            </Stack>
        ),
    },
];