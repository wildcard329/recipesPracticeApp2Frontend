import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../model/state/Selector';

function UserProfile() {
    const userdata = useSelector(selectUser);
    return(
        <div>
            <h2>{userdata.username}</h2>
            <p>Joined on {userdata.created_on}</p>
            <p>Last login {userdata.last_login}</p>
            <p>Recipes TBA</p>
        </div>
    )
}

export default UserProfile;
