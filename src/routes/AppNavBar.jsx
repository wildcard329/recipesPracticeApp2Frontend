import { Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

function AppNavBar() {
    return(
        <Navbar>
            <Navbar.Brand>Cookbook</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    <Nav.Link href='#'>Browse</Nav.Link>
                    <Nav.Link href='#'>Other Location</Nav.Link>
                    <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='#'>Action</NavDropdown.Item>
                        <NavDropdown.Item href='#'>Other Action</NavDropdown.Item>
                        <NavDropdown.Item href='#'>Random Action</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-success'>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavBar;
