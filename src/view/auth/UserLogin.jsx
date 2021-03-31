import React, { useEffect } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import UserController from '../../controller/UserController.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import { selectToken } from '../../model/state/Selector.js';
import FormController from '../../controller/FormController.js';

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

    return errors;
};

function UserLogin() {
    const history = useHistory();
    const token = useSelector(selectToken);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            last_login: new Date()
        },
        validate,
        onSubmit: async values => {
            await UserController.loginUser(values);
            history.push('/recipes/browse');
        }
    });
    useEffect(() => {
        token && UserHelper.setToken(token)
    }, [token]);

    const registerUser = e => {
        e.preventDefault();
        // history.push('/auth/register');
        FormController.relayUserRegister(true);
    };
    return(
            <Form inline onSubmit={formik.handleSubmit}>
                <FormControl
                    // className='mr-sm-2'
                    size='sm'
                    id='username'
                    name='username'
                    placeholder='username'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
                {/* <FormControl.Feedback tooltip>{formik.errors.username ? formik.errors.username : 'ok'}</FormControl.Feedback> */}

                <FormControl
                    // className='mr-sm-2'
                    size='sm'
                    id='password'
                    name='password'
                    placeholder='password'
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                <Form.Group className='auth-btn-group'>
                   <Button size='xs' className='app-navbar-item' type="submit" class="btn btn-primary" disabled={formik.values.username && formik.values.password ? false : true}>Login</Button>
                   <Button size='xs' className='app-navbar-item' onClick={registerUser} type='button' class='btn btn-link'>Sign Up</Button>
                </Form.Group>
            </Form>
    )
}

export default UserLogin;
