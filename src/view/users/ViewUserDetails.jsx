import React from 'react';
import { useHistory } from 'react-router-dom';
import UserController from '../../controller/UserController';

function ViewUserDetails({user}) {
    const history = useHistory();

    const getUserData = (e) => {
        e.preventDefault();
        UserController.getUserData(user.id)
        history.push('/users/info')
    }

    return(
        <div key={user.id} onClick={getUserData}>
            <span>ID: {user.id} </span>
            <span>Username: {user.username} </span>
            <span>Password: {user.password} </span>
            <span>Email: {user.email}</span>
        </div>
    )
}

export default ViewUserDetails;
