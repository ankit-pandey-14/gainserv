import React from 'react';
import { useFormik } from 'formik';
import { addEmployeeValidation } from '../../utilities/validation';
import Grid from '@mui/material/Grid';
import TextInput from '../controls/textInput';
import FormSelect from '../controls/formSelect';
import { ROLES_LIST } from '../../constants';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee } from '../../redux/employeeSlice';

const initialValues = {
    name: "",
    email: "",
    role: "",
    mobile: "",
    city: "",
};

const AddEditEmployee = ({modalInfo, setModalInfo, type}) => {
    const empList = useSelector((state) => state?.emp?.userList);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues:
            type === 'Add'
            ? initialValues
            : {
                name: modalInfo.data.name,
                email: modalInfo.data.email,
                mobile: modalInfo.data.mobile,
                city: modalInfo.data.city,
                role: modalInfo.data.role,
            },
        validationSchema: addEmployeeValidation,
        onSubmit : (values) => {
            if(type === 'Add'){
                dispatch(addEmployee({
                    id: empList[empList.length - 1]?.id + 1,
                    ...values,
                }))
            } else {
                dispatch(updateEmployee({
                    id: modalInfo.data.id,
                    ...values,
                }))
            }
            setModalInfo({
                open: false,
                data: null,
            })
        },
    });

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{padding: '23px', }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <TextInput
                            label="Full Name"
                            name="name"
                            value={values.name}
                            error={errors.name}
                            touch={touched.name}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextInput
                            label="Email"
                            name="email"
                            value={values.email}
                            error={errors.email}
                            touch={touched.email}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextInput
                            label="Contact No."
                            name="mobile"
                            value={values.mobile}
                            error={errors.mobile}
                            touch={touched.mobile}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextInput
                            label="City"
                            name="city"
                            value={values.city}
                            error={errors.city}
                            touch={touched.city}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormSelect
                            label="Role"
                            name="role"
                            value={values.role}
                            error={errors.role}
                            touch={touched.role}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            options={ROLES_LIST}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type='submit' variant="contained">
                            {
                                type==='Add'
                                ? 'Add Employee'
                                : 'Edit Employee'
                            }
                        </Button>
                        <Button
                            style={{marginLeft: '9px'}}
                            variant="outlined"
                            onClick={() =>{
                                setModalInfo({
                                    open: false,
                                    data: null,
                                })
                            }}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AddEditEmployee;