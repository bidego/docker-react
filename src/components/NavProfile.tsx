import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { TiUser } from 'react-icons/ti';
import { Btn } from './';

const NavProfile = (props:any) => {    
    if (!false) {
        return (
            <Nav>
                <Btn className="ml-2" variant="outline-secondary" name="Log In">Log In</Btn>
                <Btn className="ml-2" variant="outline-secondary" name="Sign In">Sign In</Btn>
            </Nav>
        )
    }
    return (
        <Nav className="mr-right">
            <NavDropdown
                drop="left"
                title={<TiUser size={32} />}
                id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mis datos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mi perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Configuraciones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Acerca de EDi</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default NavProfile;