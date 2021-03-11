import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectToken } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/storageHandler.js';

function UserDashboard() {
    const [display, setDisplay] = useState(false);
    const token = useSelector(selectToken);
    const id = UserHelper.getUserId();

    useEffect(() => {
        token || id ?
            setDisplay(true)
        :
            setDisplay(false)
    }, [token, id]);

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
