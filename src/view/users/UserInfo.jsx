import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectUserData } from '../../model/state/Selector.js';

function UserInfo() {
    const history = useHistory();
    const user = useSelector(selectUserData)

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
