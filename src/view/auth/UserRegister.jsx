import React, { useState } from 'react';
import UserController from '../../controller/UserController.js';
import { useHistory } from 'react-router-dom';

function UserRegister() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: null
    });
    const history = useHistory();

    const enterUser = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitRegistration = e => {
        e.preventDefault();
        UserController.registerNewUser(user);
        history.push('/auth/login');
    };

    const cancelRegistration = e => {
        e.preventDefault();
        history.push('/auth/login');
    }

    return(
        <div className='auth-form'>
            <form onSubmit={submitRegistration}>
                <div>
                    <label htmlFor='username'>Choose a username</label>
                    <input id='username' type='text' name='username' onChange={enterUser} />
                </div>
                <div>
                    <label htmlFor='password'>Choose a secure password</label>
                    <input id='password' type='text' name='password' onChange={enterUser} />
                </div>
                <div>
                    <label htmlFor='email'>Enter your email</label>
                    <input id='email' type='text' name='email' onChange={enterUser} />
                </div>
                <div>
                    <button onSubmit={submitRegistration}>Create Account</button>
                </div>
            </form>
            <div>
                <button onClick={cancelRegistration}>Cancel</button>
            </div>
        </div>
    )
}

export default UserRegister;
