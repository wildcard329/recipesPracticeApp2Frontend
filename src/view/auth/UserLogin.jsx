import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserController from '../../controller/UserController.js';
import UserHelper from '../../helpers/functions/storageHandler.js';
import { selectToken } from '../../model/state/Selector.js';

function UserLogin() {
    const history = useHistory();
    const token = useSelector(selectToken);
    const [user, setUser] = useState({
        username: '',
        password: '',
        last_login: new Date()
    });
    useEffect(() => {
        token ? 
            UserHelper.setToken(token)
        :
            console.log('nope');
    }, [token]);

    const onChangeCredentials = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitLogin = async e => {
        e.preventDefault();
        await UserController.loginUser(user);
        history.push('/recipes/browse');
    };

    const goToRegister = e => {
        e.preventDefault();
        history.push('/auth/register');
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
