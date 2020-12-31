import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../model/state/Selector.js';
import UserDashboardDisplay from './UserDashboardDisplay.jsx';

function UserDashboard() {
    const user = useSelector(selectUser);

    return(
        <div>
            <UserDashboardDisplay user={user} />
        </div>
    )
}

export default UserDashboard;
