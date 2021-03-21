import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import UserController from '../../controller/UserController.js';

function UserRegister() {
    const history = useHistory();
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
        history.push('/auth/login');
    };

    const cancelRegistration = () => {
        history.push('/auth/login');
    }

    return(
        <div className='auth-form'>
            <Form>
                <Form.Group controlId='username'>
                    <input id='username' name='username' type='text' placeholder='username' onChange={enterUser} />
                </Form.Group>
                <Form.Group controlId='password'>
                    <input id='password' name='password' type='password' placeholder='password' onChange={enterUser} />
                </Form.Group>
                <Form.Group controlId='email'>
                    <input id='email' name='email' type='email' placeholder='email' onChange={enterUser} />
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
