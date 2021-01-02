import React from 'react';

import UserDashboardMenu from './UserDashboardMenu.jsx';
import UserDashboardUser from './UserDashboardUser.jsx';

function UserDashboardDisplay() {
    return(
        <div>
            <UserDashboardMenu />
            <UserDashboardUser />
        </div>
    )
}

export default UserDashboardDisplay;
