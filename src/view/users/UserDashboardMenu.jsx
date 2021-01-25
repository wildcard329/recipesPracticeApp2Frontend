import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import UserController from '../../controller/UserController';
import UserHelper from '../../helpers/functions/storageHandler.js';
import { selectUser } from '../../model/state/Selector.js';

function UserDashboardMenu() {
    const user = useSelector(selectUser);

    const viewProfile = () => {
        UserController.routeToDestination('profile');
    }

    const browseRecipes = () => {
        UserController.routeToDestination('browse');
    }

    const browseUserRecipes = async () => {
        await UserController.getUserData(user.id);
        UserController.routeToDestination('user recipes');
    }

    const toAddRecipe = () => {
        UserController.routeToDestination('add recipe');
    };

    const logout = async () => {
        UserHelper.removeTokenSession();
        UserController.logoutUser(user);
        UserController.routeToDestination('login');
    };

    return(
        <div className='user-dashboard-left'>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={viewProfile}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={browseRecipes}>Browse</Dropdown.Item>
                    <Dropdown.Item onClick={browseUserRecipes}>Cookbook</Dropdown.Item>
                    <Dropdown.Item onClick={toAddRecipe}>New Recipe</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default UserDashboardMenu;
