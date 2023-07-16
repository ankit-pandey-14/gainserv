import *as Yup from 'yup';

export const addEmployeeValidation = Yup.object({
    name: Yup.string().min(2).required("Please Enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    mobile: Yup.number().positive().integer().required('Please Enter you Mobile Number'),
    city: Yup.string().required("Please enter your city"),
    role: Yup.string().required("Please select a role"),
    isPermanent: Yup.boolean(),
    gender: Yup.string().required('Please specify your gender'),
});