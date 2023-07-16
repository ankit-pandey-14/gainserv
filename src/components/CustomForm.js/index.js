import React from 'react';
import { useFormik } from 'formik';

export const useForm = (props) => {
    const { initialValues, validationSchema, onSubmitHandler } = props;
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit : (values) => {
            onSubmitHandler(values)
        },
    });

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};

const CustomForm = (props) => {
    const { styles, handleSubmit } = props;

    return (
        <form
            autoComplete='off'
            onSubmit={handleSubmit}
            style={styles}
        >
            { props.children }
        </form>
    );
};

export default CustomForm;