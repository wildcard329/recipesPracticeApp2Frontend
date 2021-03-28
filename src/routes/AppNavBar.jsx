import React, { useEffect, useState } from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectToken, selectUser } from '../model/state/Selector.js';
import UserHelper from '../helpers/functions/storageHandler.js';
import UserController from '../controller/UserController.js';

import UserLogin from '../view/auth/UserLogin.jsx';

function AppNavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const id = UserHelper.getUserId() || null;

    const logout = async e => {
        e.preventDefault();
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
        <Navbar>
            <Navbar.Brand>Cookbook</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link href='#'>Browse</Nav.Link>
                    {loggedIn && <Nav.Link href='#'>Your Recipes</Nav.Link>}
                    <NavDropdown title='Actions' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='#'>Add Recipe</NavDropdown.Item>
                        <NavDropdown.Item href='#'>View Profile</NavDropdown.Item>
                        <NavDropdown.Item href='#'>View Cookbook</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-success'>Search</Button>
                </Form>
                {loggedIn ?
                <Button onClick={logout} variant='outline-danger'>Logout</Button>
                :
                <UserLogin />}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavBar;
