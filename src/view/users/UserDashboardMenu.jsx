import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import UserController from '../../controller/UserController';
import UserHelper from '../../helpers/functions/storageHandler.js';
import { selectUser } from '../../model/state/Selector.js';
import { useHistory } from 'react-router-dom';

function UserDashboardMenu() {
    const history = useHistory();
    const user = useSelector(selectUser);

    const viewProfile = () => {
        history.push('/user/profile');
    }

    const browseRecipes = () => {
        history.push('/recipes/browse');
    }

    const browseUserRecipes = async () => {
        await UserController.getUserData(user.id);
        history.push('/recipes/user');
    }

    const toAddRecipe = () => {
        history.push('/recipes/add');
    };

    const logout = async () => {
        UserHelper.removeTokenSession();
        UserController.logoutUser(user);
        history.push('/auth/login');
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
