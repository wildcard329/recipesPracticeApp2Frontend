import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserController from '../../controller/UserController';

function UserLogin() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        lastLogin: Date.now()
    })
    const history = useHistory();

    const onChangeCredentials = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitLogin = e => {
        e.preventDefault();
        UserController.loginUser(user);
        history.push('/recipes/all');
    };

    const goToRegister = e => {
        e.preventDefault();
        history.push('/auth/register')
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
    )
}

export default UserLogin;
