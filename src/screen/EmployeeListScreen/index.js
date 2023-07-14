import React, { useEffect, useState } from 'react';
import EmployeeList from '../../components/Employee/employeeList';
import { Button, Grid, TextField } from '@mui/material';
import AddEditModal from '../../components/controls/addEditModal';
import { useSelector } from 'react-redux';

const EmployeeListScreen = () => {
    const empList = useSelector((state) => state.emp.userList);

    const [employeeData, setEmployeeData] = useState(empList);
    const [searchQuery, setSearchQuery] = useState('');
    const [modalInfo, setModalInfo] = useState({
        open: false,
        data: null,
    });

    const onSearchQuery = (query) =>{
        if(query){
            setEmployeeData(
                empList.filter((emp) => emp?.name?.includes(query))
            )
        } else{
            setEmployeeData(empList);
        }
    }

    useEffect(() => {
        let searchTimer = setTimeout(()=>{
            onSearchQuery(searchQuery);
        }, 500)

        return () => clearTimeout(searchTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])

    useEffect(() => {
        setEmployeeData(empList);
    }, [empList])

    return (
        <>
            <div className='mt-30 pl-9 pr-9'>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                size='small'
                                label="Search By Name"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant='outlined'
                                onClick={() => {
                                    setModalInfo({
                                        open: true,
                                        data: null,
                                    })
                                }}
                            >
                                Add Employee
                            </Button>
                        </Grid>
                    </Grid>
                </div>

                <div className='mt-40'>
                    <h2>Company Member List</h2>
                    <EmployeeList employeeData={employeeData} setModalInfo={setModalInfo} />
                </div>
            </div>

            <AddEditModal
                modalInfo={modalInfo}
                setModalInfo={setModalInfo}
                type={modalInfo?.data ? "Edit" : "Add"}
            />

        </>
    );
};

export default EmployeeListScreen;