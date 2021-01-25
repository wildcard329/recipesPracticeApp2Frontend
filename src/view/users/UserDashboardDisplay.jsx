import React from 'react';

import UserDashboardMenu from './UserDashboardMenu.jsx';
import UserDashboardUser from './UserDashboardUser.jsx';
import SearchRecipes from '../recipes/SearchRecipes.jsx';

function UserDashboardDisplay() {
    return(
        <div className='dashboard-container'>
            <UserDashboardMenu />
            <SearchRecipes />
            <UserDashboardUser />
        </div>
    )
}

export default UserDashboardDisplay;
