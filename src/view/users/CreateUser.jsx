import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserController from '../../controller/UserController';

function CreateUser() {
    const history = useHistory();
    const [user, setUser] = useState({
        username: '',
        password: '',
        email: ''
    });

    const enterUser = e => {
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    };

    const cancel = () => {
        history.push('/users/all');
    };

    const addUser = async () => {
        await UserController.addNewUser(user);
        history.push('/users/all');
    };

    return(
        <div>
            <form onSubmit={addUser}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' name='username' onChange={enterUser} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='text' name='password' onChange={enterUser} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='text' name='email' onChange={enterUser} />
                </div>
                <div>
                    <button onClick={cancel}>Cancel</button>
                    <button onClick={addUser}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUser;
