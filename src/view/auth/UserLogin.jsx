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
        console.log('user: ',user)
        await UserController.loginUser(user);
        UserController.routeToDestination('browse');
    };

    const goToRegister = e => {
        e.preventDefault();
        UserController.routeToDestination('register');
    };
    return(
        <div className='auth-form'>
            <form onSubmit={submitLogin}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' name='username' onChange={onChangeCredentials} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='text' name='password' onChange={onChangeCredentials} />
                </div>
                <div>
                    <button onClick={submitLogin}>Login</button>
                </div>
            </form>
            <div>
                <h4>Don't have an account?</h4>
                <button onClick={goToRegister}>Register</button>
            </div>
        </div>
        // <form onSubmit={submitLogin}>
        //     <Form>
        //         <Form.Group controlId='formUsername'>
        //             <Form.Label>Username</Form.Label>
        //             <Form.Control type='text' id='username' value='username' onChange={onChangeCredentials} placeholder='username' />
        //             <Form.Text className='text-muted'>Enter your username</Form.Text>
        //         </Form.Group>
        //         <Form.Group controlId='formPassword'>
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type='password' id='password' value='password' onChange={onChangeCredentials} placeholder='password' />
        //             <Form.Text className='text-muted'>Enter your password</Form.Text>
        //         </Form.Group>
        //         <Form.Group>
        //             <Button onClick={submitLogin} type="button" class="btn btn-primary">Login</Button>
        //             <Button onClick={goToRegister} type='button' class='btn btn-link'>Register</Button>
        //         </Form.Group>
        //     </Form>
        // </form>
    )
}

export default UserLogin;
