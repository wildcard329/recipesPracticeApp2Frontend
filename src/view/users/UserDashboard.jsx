import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectUser, selectToken } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/storageHandler.js';

function UserDashboard() {
    const [display, setDisplay] = useState(false);
    const user = UserHelper.validateId(useSelector(selectUser));
    const token = useSelector(selectToken);
    UserHelper.setToken(token, user);
    const path = useLocation().pathname;

    useEffect(() => {
        // path !== '/auth/login' || '/auth/register' ? setDisplay(true) : setDisplay(false)
        // console.log('display state: ',display)
        if (path === '/auth/login') {
            setDisplay(false)
        } else if (path === '/auth/register') {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }, [path]);

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
