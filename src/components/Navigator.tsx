import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { TiUser, TiGlobeOutline } from 'react-icons/ti';

const Navigator = (props:any) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <TiGlobeOutline size={28} />Educación Digital
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Patio</Nav.Link>
                <Nav.Link href="#link">Mis Cursos</Nav.Link>
                <Nav.Link href="#link">Mis Proyectos</Nav.Link>
                <Nav.Link href="#link">Debates</Nav.Link>
                <NavDropdown className="mr-right pull-right" title={<TiUser size={32} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mis datos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mi perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Configuraciones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Acerca de EDi</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigator;