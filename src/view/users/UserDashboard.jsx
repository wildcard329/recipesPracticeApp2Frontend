import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardNoDisplay from './UserDashboardNoDisplay.jsx';

function UserDashboard() {
    const user = useSelector(selectUser);
    const token = localStorage.getItem('token');

    return(
        <div>
            {token ? 
                <UserDashboardDisplayUser user={user} />
            :
                <UserDashboardNoDisplay />
            }
        </div>
    )
}

export default UserDashboard;
