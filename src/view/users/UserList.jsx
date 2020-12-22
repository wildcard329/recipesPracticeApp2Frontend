import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UserController from '../../controller/UserController.js';
import { selectUserList } from '../../model/state/user/UserSelector.js';
import UserCard from './UserCard.jsx';

function UserList() {
    const users = useSelector(selectUserList)
    const history = useHistory();

    useEffect(() => {
        UserController.getUserList();
    }, [users]);

    const toAddUser = (e) => {
        e.preventDefault();
        history.push('/users/add')
    }

    return(
        <div>
            <UserCard users={users} />
            <button onClick={toAddUser}>Create User</button>
        </div>
    )
}

export default UserList;
