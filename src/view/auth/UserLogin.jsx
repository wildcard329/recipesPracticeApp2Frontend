import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import UserController from '../../controller/UserController.js';

function UserLogin() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        last_login: new Date()
    })

    const onChangeCredentials = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitLogin = async e => {
        e.preventDefault();
        await UserController.loginUser(user);
        UserController.routeToDestination('browse');
    };

    const goToRegister = e => {
        e.preventDefault();
        UserController.routeToDestination('register');
    };
    return(
        <form onSubmit={submitLogin} className='auth-form'>
            <Form onSubmit={submitLogin}>
                <Form.Group controlId='password'>
                    <input id='username' type='text' placeholder='username' name='username' onChange={onChangeCredentials} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <input id='password' type='password' placeholder='password' name='password' onChange={onChangeCredentials} />
                </Form.Group>
                <Form.Group className='auth-btn-group'>
                    <Button onClick={submitLogin} type="button" class="btn btn-primary">Login</Button>
                    <Button onClick={goToRegister} type='button' class='btn btn-link'>Register</Button>
                </Form.Group>
            </Form>
        </form>
    )
}

export default UserLogin;
