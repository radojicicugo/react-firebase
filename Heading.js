import React from 'react';
import { Link } from 'react-router-dom';
import {
Navbar,
Nav,
NavItem,
NavbarBrand,
Container
} from 'reactstrap';


function Heading() {
    return (
        <Navbar className="container"  color="dark">
            <Container>
                <NavbarBrand href="/" >My CRUD</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className="btn btn-primary " to="/adduser" >Add User</Link>
                </NavItem>
            </Nav>
            </Container>
        </Navbar>
    );
}

export default Heading;