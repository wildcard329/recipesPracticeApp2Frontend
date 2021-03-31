import React, { useEffect, useState } from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs'

import { selectToken, selectUser } from '../model/state/Selector.js';
import UserHelper from '../helpers/functions/storageHandler.js';
import UserController from '../controller/UserController.js';
import FormController from '../controller/FormController.js';

import UserLogin from '../view/auth/UserLogin.jsx';

function AppNavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const id = UserHelper.getUserId() || null;
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const history = useHistory();

    const viewProfile = () => {
        history.push('/user/profile');
    };

    const browseRecipes = () => {
        history.push('/recipes/browse');
    };

    const browseUserRecipes = async () => {
        await UserController.getUserData(id);
        history.push('/recipes/user');
    };

    const createRecipe = () => {
        // history.push('/recipes/add');
        FormController.relayCreateRecipe(true);
    };

    const logout = e => {
        e.preventDefault();
        history.push('/');
        UserHelper.removeTokenSession();
        UserController.logoutUser(user);
    };

    useEffect(() => {
        token || id ?
            setLoggedIn(true)
        :
            setLoggedIn(false)
    }, [token, id]);

    return(
        <Navbar sticky='top' className='app-navbar'>
            <Navbar.Brand>Cookbook</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link onClick={browseRecipes}>Browse</Nav.Link>
                    {loggedIn && <Nav.Link onClick={browseUserRecipes}>Your Recipes</Nav.Link>}
                    {loggedIn &&
                    <NavDropdown title='Actions' id='basic-nav-dropdown'>
                        <NavDropdown.Item onClick={createRecipe}>Add Recipe</NavDropdown.Item>
                        <NavDropdown.Item onClick={viewProfile}>View Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={browseUserRecipes}>View Cookbook</NavDropdown.Item>
                    </NavDropdown>}
                </Nav>
                <Form inline>
                    <FormControl type='text' placeholder='Search' size='sm' />
                    <Button size='sm' variant='outline-primary'><BsSearch /></Button>
                </Form>
                {loggedIn ?
                <Button size='sm' onClick={logout} variant='outline-dark'>Logout</Button>
                :
                <UserLogin />}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavBar;
