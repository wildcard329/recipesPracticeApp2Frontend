import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectUser, selectToken } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/storageHandler.js';
import UserController from '../../controller/UserController.js';

function UserDashboard() {
    const [display, setDisplay] = useState(false);
    const user = UserHelper.validateId(useSelector(selectUser));
    const token = useSelector(selectToken);
    UserHelper.setToken(token, user);
    const path = useLocation().pathname;

    useEffect(() => {
        UserController.getLoggedInUser(user.id);
        switch (path) {
            case '/auth/login':
                return setDisplay(false);
            case '/auth/register':
                return setDisplay(false);
            case '/':
                return setDisplay(false);
            default:
                return setDisplay(true);
        };
    }, [path]);

    return(
        <div>
            <div className={display ? 'none' : ''}>
                <UserDashboardLogoutDsiplay />
            </div>
            <div className={display ? '' : 'none'}>
                <UserDashboardDisplayUser />
            </div>
        </div>
    )
}

export default UserDashboard;
