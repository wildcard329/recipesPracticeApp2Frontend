import { useEffect, useState } from 'react';
import { Form, Button, FormControl, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import UserController from '../../controller/UserController.js';
import FormController from '../../controller/FormController.js';
import { selectRegisterUser } from '../../model/state/Selector.js';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length < 3) {
        errors.username = 'Username must be at least three characters';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least eight characters';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Required';
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = 'Passwords must match'
    }

    return errors;
};

function UserRegister() {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirmation: '',
            email: null,
            created_on: new Date()
        },
        validate,
        onSubmit: async values => {
            await UserController.registerNewUser(values);
            FormController.relayUserRegister(false);
        }
    });

    const cancelRegistration = () => {
        FormController.relayUserRegister(false);
    }

    return(
            <Form onSubmit={formik.handleSubmit} className='auth-form'>
                <FormControl
                    id='username'
                    name='username'
                    placeholder='username'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}

                <FormControl
                    className='mr-sm-2'
                    id='password'
                    name='password'
                    placeholder='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}

                <FormControl
                    className='mr-sm-2'
                    id='passwordConfirmation'
                    name='passwordConfirmation'
                    placeholder='confirm password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirmation}
                />
                {formik.errors.passwordConfirmation ? <div className='error'>{formik.errors.passwordConfirmation}</div> : null}
            
                <FormControl
                    className='mr-sm-2'
                    id='email'
                    name='email'
                    placeholder='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Button type='submit'disabled={formik.values.username && formik.values.password && formik.values.password == formik.values.passwordConfirmation ? false : true}>Submit</Button>
                <Button onClick={cancelRegistration}>Cancel</Button>
            </Form>
    )
}

export default UserRegister;
