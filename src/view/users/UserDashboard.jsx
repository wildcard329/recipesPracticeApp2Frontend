import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { selectUser, selectToken } from '../../model/state/Selector.js';
import UserDashboardDisplayUser from './UserDashboardDisplay.jsx';
import UserDashboardLogoutDsiplay from './UserDashboardLogoutDsiplay.jsx';
import UserHelper from '../../helpers/functions/storageHandler.js';
import NavHelper from '../../helpers/functions/locationHandler.js';
import UserController from '../../controller/UserController.js';

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
