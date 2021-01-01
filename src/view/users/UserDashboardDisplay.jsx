import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserController from '../../controller/UserController';

function UserDashboardDisplay({user}) {
    const history = useHistory();

    const logout = () => {
        UserController.logoutUser(user);
        history.push('/auth/login');
    };
    return(
        <div className='user-dashboard'>
            <h2>{user && user.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default UserDashboardDisplay;
