import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import UserController from '../../controller/UserController.js';
import { selectUserList } from '../../model/state/UserSelector.js';
import UserCard from './UserCard.jsx';

function UserList() {
    const users = useSelector(selectUserList)
    useEffect(() => {
        UserController.getUserList();
    }, []);
    return(
        <div>
            <UserCard users={users} />
        </div>
    )
}

export default UserList;
