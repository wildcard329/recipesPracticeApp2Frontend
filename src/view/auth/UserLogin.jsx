import React, { useState } from 'react';
import UserController from '../../controller/UserController';
import { useHistory, link } from 'react-router-dom';

function UserLogin() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const history = useHistory();

    const onChangeCredentials = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitLogin = e => {
        e.preventDefault();
        UserController.loginUser(user);
        history.push('/recipes/all');
    }

    const goToRegister = () => {
        history.push('/auth/register')
    }
    return(
        <div>
            <form onSubmit={submitLogin}>
                <div>
                    <label htmlFor='username'>Enter username</label>
                    <input id='username' type='text' name='username' onChange={onChangeCredentials} />
                </div>
                <div>
                    <label htmlFor='password'>Enter password</label>
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
