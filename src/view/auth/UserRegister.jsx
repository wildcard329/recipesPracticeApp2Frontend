import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import UserController from '../../controller/UserController.js';
import AuthError from './AuthError.jsx';

function UserRegister() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: null,
        created_on: new Date()
    });

    const enterUser = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitRegistration = e => {
        e.preventDefault();
        UserController.registerNewUser(user);
        UserController.routeToDestination('login');
    };

    const cancelRegistration = () => {
        UserController.routeToDestination('login');
    }

    return(
        <div className='auth-form'>
            <Form>
                <Form.Group controlId='username'>
                    <input id='username' type='text' placeholder='username' onChange={enterUser} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <input id='password' type='password' placeholder='password' onChange={enterUser} />
                </Form.Group>
                <Form.Group controlId='email'>
                    <input id='email' type='email' placeholder='email' onChange={enterUser} />
                </Form.Group>
                <Form.Group className='auth-btn-group'>
                    <Button className='btn btn-primary' onClick={submitRegistration}>Submit</Button>
                    <Button className='btn btn-secondary' onClick={cancelRegistration}>Cancel</Button>
                </Form.Group>
                {/* <AuthError /> */}
            </Form>
        </div>
    )
}

export default UserRegister;
