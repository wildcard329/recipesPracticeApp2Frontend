import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserDashboardDisplay({user}) {
    const history = useHistory();
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        if (user) {
            setDisplay(true);
        }
    }, [user])

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/auth/login');
        setDisplay(false);
    };
    return(
        <div className={display ? 'user-dashboard' : 'none'}>
            <h2>{user && user.username}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default UserDashboardDisplay;
