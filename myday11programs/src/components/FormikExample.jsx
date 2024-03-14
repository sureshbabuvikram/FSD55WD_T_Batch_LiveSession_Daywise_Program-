import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './FormikStyles.css';

const FormikExample = () => {
    const initialValues={
        name:'',
        email:'',
        password:'',
        phoneNumber:'',
    }
    const validationSchema=Yup.object().shape({
            name:Yup.string().required('name is required'),
            // email:Yup.string().email('invalid mail').required('email is required'),
            email:Yup.string().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'invalid email ').required('email is required'),
            password:Yup.string().min(5,'password must be atleast 5 digits ')
            .max(10,'password must be atmost 10 digits' ).
            matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'invalid password').required('password is required'),
            phoneNumber:Yup.string().matches(/^\+(?:[0-9] ?){6,14}[0-9]$/,'invalid number').required('phoneNumber is required'),
    })

    const handleSubmit=(values)=>{
            console.log(values);
    }
    return (
        <div>
            <h1>Formik comp</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form >
                    <div>
                        <label>Name:</label>
                        <Field type='text' name='name' />
                        <ErrorMessage name='name' component='h3' className='errorColor' />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type='email' name='email' />
                        <ErrorMessage name='email' component='h5' className='errorColor' />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field type='password' name='password'  />
                        <ErrorMessage name='password' component='h5' className='errorColor' />
                    </div>
                    <div>
                        <label>Phonenumber:</label>
                        <Field type='text' name='phoneNumber'  />
                        <ErrorMessage  name='phoneNumber' component='h5' className='errorColor' />
                    </div>

                    <button  type='submit' >Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default FormikExample;
