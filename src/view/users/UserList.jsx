import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import UserController from '../../controller/UserController.js';
import { selectUserList } from '../../model/state/Selector.js';
import UserCard from './UserCard.jsx';

function UserList() {
    const users = useSelector(selectUserList);

    useEffect(() => {
        UserController.getUserList();
    }, []);

    const toAddUser = (e) => {
        e.preventDefault();
        UserController.routeToDestination('add user');
    };

    return(
        <div>
            <UserCard users={users} />
            <button onClick={toAddUser}>Create User</button>
        </div>
    )
}

export default UserList;
