import React from 'react';

function UserCard({users}) {

    return(
        <div>
            {users && users.map(user => {
                return(
                    <div key={user.id}>
                        <span>Username: {user.username} </span>
                        <span>Password: {user.password} </span>
                        <span>Email: {user.email}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default UserCard;
