import React from 'react';

import UserDashboardMenu from './UserDashboardMenu.jsx';
import UserDashboardUser from './UserDashboardUser.jsx';

function UserDashboardDisplay() {
    return(
        <div className='dashboard-container'>
            <UserDashboardMenu />
            <UserDashboardUser />
        </div>
    )
}

export default UserDashboardDisplay;
