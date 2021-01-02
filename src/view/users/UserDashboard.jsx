import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectUser, selectToken } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/storageHandler.js';

function UserDashboard() {
    const [display, setDisplay] = useState(false);
    const user = UserHelper.validateId(useSelector(selectUser));
    const token = useSelector(selectToken);
    UserHelper.setToken(token, user);
    const history = useHistory();

    useEffect(() => {
        history.location.pathname === '/auth/login' || '/auth/register' ? setDisplay(false) : setDisplay(true);
    }, [history.location.pathname]);

    console.log(history.location.pathname === '/auth/login')
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
