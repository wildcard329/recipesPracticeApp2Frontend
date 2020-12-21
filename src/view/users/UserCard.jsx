import React from 'react';
import ViewUserDetails from './ViewUserDetails.jsx';

function UserCard({users}) {
    return(
        <div>
            {users && users.map(user => {
                return(
                    <ViewUserDetails user={user} />
                )
            })}
        </div>
    )
}

export default UserCard;
