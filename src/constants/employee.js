import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export const employeeTableColumn = ( setModalInfo, setDeleteModal ) => [
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
        title: 'Phone Number',
        key: 'mobile',
        dataIndex: 'mobile'
    },
    {
        title: 'Location',
        key: 'location',
        dataIndex: 'city'
    },
    {
        title: 'Role',
        key: 'role',
        dataIndex: 'role'
    },
    {
        title: 'Actions',
        key: 'action',
        render: (record) => (
            <>
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
            </>
        ),
    },
];