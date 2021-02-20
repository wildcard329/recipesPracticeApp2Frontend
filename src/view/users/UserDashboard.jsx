import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { selectUser, selectToken } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/storageHandler.js';
import NavHelper from '../../helpers/functions/locationHandler.js';
import UserController from '../../controller/UserController.js';

function UserDashboard() {
    const history = useHistory();
    const [display, setDisplay] = useState(false);
    // const user = UserHelper.validateId(useSelector(selectUser));
    // const token = useSelector(selectToken);
    // UserHelper.setToken(token, user);
    const path = useLocation().pathname;
    const userId = UserHelper.getUserId();

    useEffect(() => {
        // UserController.getLoggedInUser(user.id);
        userId ?
        setDisplay(NavHelper.setDashboard(path))
        :
        history.push('/auth/login');
    }, [path, userId]);

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
