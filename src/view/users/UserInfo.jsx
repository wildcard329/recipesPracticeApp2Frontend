import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserData } from '../../model/state/user/UserSelector.js';

function UserInfo() {
    const user = useSelector(selectUserData)
    const history = useHistory();

    const toUsers = e => {
        e.preventDefault();
        history.push('/users/all');
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
