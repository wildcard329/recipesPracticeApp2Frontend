import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import UserController from '../../controller/UserController';
import UserHelper from '../../helpers/functions/storageHandler.js';
import { selectUser } from '../../model/state/Selector.js';

function UserDashboardMenu() {
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const openMenu = e => {
        e.preventDefault();
        setOpen(true);
    };

    const viewProfile = () => {
        UserController.getUserData(user.id);
        history.push('/user/profile');
        setOpen(false);
    }

    const browseRecipes = () => {
        history.push('/recipes/all');
        setOpen(false);
    }

    const browseUserRecipes = () => {
        // todo: make component which only contains a single list of recipes
        // recipes list component currently contains multiple lists
        setOpen(false);
    }

    const logout = () => {
        UserController.logoutUser(user);
        UserHelper.removeTokenSession();
        history.push('/auth/login');
        setOpen(false);
    };

    return(
        <div className='user-dashboard-left'>
            <h2 onClick={openMenu} className={!open ? 'menu' : 'none'}>Menu</h2>
            <ul className={open ? 'menu-list' : 'none'}>
                <li>
                    <button onClick={viewProfile}>Profile</button>
                </li>
                <li>
                    <button onClick={browseRecipes}>All Recipes</button>
                </li>
                <li>
                    <button onClick={browseUserRecipes}>My Recipes</button>
                </li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default UserDashboardMenu;
