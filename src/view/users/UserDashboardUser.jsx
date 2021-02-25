import React from 'react';

import UserHelper from '../../helpers/functions/storageHandler.js';

function UserDashboardUser() {
    const username = UserHelper.getUsername();
    return(
        <div className='user-dashboard-right'>
            <h2>{username && `Welcome, ${username}`}</h2>
        </div>
    )
}

export default UserDashboardUser;
