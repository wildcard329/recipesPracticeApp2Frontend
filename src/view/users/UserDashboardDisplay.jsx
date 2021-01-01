import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserController from '../../controller/UserController';
import UserHelper from '../../helpers/functions/storageHandler.js';

function UserDashboardDisplay({user}) {
    const history = useHistory();

    const logout = () => {
        UserController.logoutUser(user);
        UserHelper.removeTokenSession();
        history.push('/auth/login');
    };
    return(
        <div className='user-dashboard-right'>
            <h2>{user && `Welcome, ${user.username}`}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default UserDashboardDisplay;
