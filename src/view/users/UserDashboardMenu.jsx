import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserController from '../../controller/UserController';
import UserHelper from '../../helpers/functions/storageHandler.js';
import { selectUser } from '../../model/state/Selector.js';

function UserDashboardMenu() {
    const user = useSelector(selectUser);
    const [open, setOpen] = useState(false);

    const openMenu = e => {
        e.preventDefault();
        setOpen(true);
    };
    
    const closeMenu = () => {
        setOpen(false)
    }

    const viewProfile = () => {
        UserController.routeToDestination('profile');
        closeMenu();
    }

    const browseRecipes = () => {
        UserController.routeToDestination('browse');
        closeMenu();
    }

    const browseUserRecipes = () => {
        UserController.getUserData(user.id);
        UserController.routeToDestination('user recipes');
        closeMenu();
    }

    const toAddRecipe = () => {
        UserController.routeToDestination('add recipe');
        closeMenu();
    };

    const logout = async () => {
        await UserController.logoutUser(user);
        await UserHelper.removeTokenSession();
        UserController.routeToDestination('login');
        closeMenu();
    };

    return(
        <div className='user-dashboard-left'>
            <h2 onMouseEnter={openMenu} className={!open ? 'menu' : 'none'}>Menu</h2>
            <ul className={open ? 'menu-list' : 'none'} onMouseLeave={closeMenu}>
                <li className='menu-item'>
                    <button onClick={viewProfile}>Profile</button>
                </li>
                <li className='menu-item'>
                    <button onClick={browseRecipes}>Browse Recipes</button>
                </li>
                <li className='menu-item'>
                    <button onClick={browseUserRecipes}>My Recipes</button>
                </li>
                <li className='menu-item'>
                    <button onClick={toAddRecipe}>Add Recipe</button>
                </li>
                <li className='menu-item'>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default UserDashboardMenu;
