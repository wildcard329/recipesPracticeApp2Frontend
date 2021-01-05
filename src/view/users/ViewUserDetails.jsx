import React from 'react';

import UserController from '../../controller/UserController';

function ViewUserDetails({user}) {

    const getUserData = async () => {
        await UserController.getUserData(user.id);
        UserController.routeToDestination('user info');
    }

    return(
        <div key={user.id} onClick={getUserData}>
            <span>ID: {user.id} </span>
            <span>Username: {user.username} </span>
            <span>Password: {user.password} </span>
            <span>Email: {user.email}</span>
        </div>
    )
}

export default ViewUserDetails;
