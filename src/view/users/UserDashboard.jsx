import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUser, selectToken, selectLoggedStatus } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserController from '../../controller/UserController.js';
import UserHelper from '../../helpers/functions/storageHandler.js';

function UserDashboard() {
    const user = UserHelper.validateId(useSelector(selectUser));
    const token = useSelector(selectToken);
    UserHelper.setToken(token, user);
    const loggedIn = useSelector(selectLoggedStatus);

    useEffect(() => {
        UserController.getLoggedInUser(user.id);
    }, [loggedIn])

    return(
        <div>
            {loggedIn ? 
                <UserDashboardDisplayUser user={user} />
            :
                <UserDashboardLogoutDsiplay />
            }
        </div>
    )
}

export default UserDashboard;
