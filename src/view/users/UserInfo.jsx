import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserData } from '../../model/state/Selector.js';
import UserController from '../../controller/UserController.js';

function UserInfo() {
    const user = useSelector(selectUserData)

    const toUsers = e => {
        e.preventDefault();
        UserController.routeToDestination('all users');
    };
    return(
        <div>
            <h2>{user.username}</h2>
            <p>{user.password}</p>
            <p>{user.email}</p>
            <button onClick={toUsers}>Users</button>
        </div>
    )
}

export default UserInfo;
