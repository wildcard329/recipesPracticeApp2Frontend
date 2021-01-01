import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/validateUserId.js';

function UserDashboard() {
    const user = UserHelper.validateId(useSelector(selectUser));
    const token = localStorage.getItem('token');

    return(
        <div>
            {token ? 
                <UserDashboardDisplayUser user={user} />
            :
                <UserDashboardLogoutDsiplay />
            }
        </div>
    )
}

export default UserDashboard;
