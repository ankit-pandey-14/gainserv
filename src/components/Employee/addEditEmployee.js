import React from 'react';
import { addEmployeeValidation } from '../../utilities/validation';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CustomInput from '../controls/customInput';
import CustomSelect from '../controls/customSelect';
import { GENDER, ROLES_LIST } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee } from '../../redux/employeeSlice';
import CustomButton from '../controls/customButton';
import { USER_ADDED, USER_UPDATED } from '../../constants/message';
import CustomRadio from '../controls/customRadio';
import CustomForm, { useForm } from '../CustomForm.js';
import CustomCheckbox from '../controls/customCheckbox';

const initialValues = {
    name: "",
    email: "",
    role: "",
    mobile: "",
    city: "",
    gender: '',
    isPermanent: false,
};

const AddEditEmployee = ({modalInfo, setModalInfo, type, setNotification}) => {
    const empList = useSelector((state) => state?.emp?.userList);
    const dispatch = useDispatch();

    const onSubmit = (values) => {
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
        });
        setNotification({
            visible: true,
            messege: type === 'Add' ? USER_ADDED : USER_UPDATED
        });
    };

    const {
        values, errors, touched, handleChange, handleBlur, handleSubmit,
    } = useForm({
        initialValues :
            type === 'Add'
            ? initialValues
            : {
                name: modalInfo.data.name,
                email: modalInfo.data.email,
                mobile: modalInfo.data.mobile,
                city: modalInfo.data.city,
                role: modalInfo.data.role,
                isPermanent: modalInfo.data.isPermanent,
                gender: modalInfo.data.gender,
            },
        validationSchema: addEmployeeValidation,
        onSubmitHandler: onSubmit,
    })

    return (
        <>
            <CustomForm
                styles={{padding: '23px'}}
                handleSubmit={handleSubmit}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="Full Name"
                            name="name"
                            value={values.name}
                            error={errors.name}
                            touch={touched.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="Email"
                            name="email"
                            value={values.email}
                            error={errors.email}
                            touch={touched.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="Contact No."
                            name="mobile"
                            value={values.mobile}
                            error={errors.mobile}
                            touch={touched.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="City"
                            name="city"
                            value={values.city}
                            error={errors.city}
                            touch={touched.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <CustomSelect
                            label="Role"
                            name="role"
                            value={values.role}
                            error={errors.role}
                            touch={touched.role}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={ROLES_LIST}
                        />

                        <CustomCheckbox
                            label="Permanent Employee"
                            name="isPermanent"
                            value={values.isPermanent}
                            error={errors.isPermanent}
                            onChange={handleChange}
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <CustomRadio
                            row={true}
                            label="Gender"
                            name="gender"
                            value={values.gender}
                            error={errors.gender}
                            touch={touched.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={GENDER}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <CustomButton
                                type='submit'
                                variant='contained'
                                btnText={ type === 'Add' ? 'Add Employee' : 'Edit Employee' }
                                color='success'
                            />
                            <CustomButton
                                variant='outlined'
                                btnText='Cancel'
                                onClick={() => { setModalInfo({ open: false, data: null, }) }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </CustomForm>
        </>
    );
};

export default AddEditEmployee;