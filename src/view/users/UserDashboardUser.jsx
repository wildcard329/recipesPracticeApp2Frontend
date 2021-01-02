import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../model/state/Selector.js';

function UserDashboardUser() {
    const user = useSelector(selectUser);
    return(
        <div className='user-dashboard-right'>
            <h2>{user && `Welcome, ${user.username}`}</h2>
        </div>
    )
}

export default UserDashboardUser;
