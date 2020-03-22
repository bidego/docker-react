import React, { useState, useEffect, useCallback } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { TiGlobeOutline } from 'react-icons/ti';
import { NavProfile } from './';

const Navigator = (props:any) => {
    const handleNavItemEvent = (ev:any) => {
        const anchor = document.URL.split("#")[1];
        console.log(anchor);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">
                <TiGlobeOutline size={28} />Educación Digital
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="floor" onClick={handleNavItemEvent}>Patio</Nav.Link>
                <Nav.Link href="courses" onClick={handleNavItemEvent}>Mis Cursos</Nav.Link>
                <Nav.Link href="projects" onClick={handleNavItemEvent}>Mis Proyectos</Nav.Link>
                <Nav.Link href="rooms" onClick={handleNavItemEvent}>Debates</Nav.Link>
            </Nav>
            <NavProfile />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigator;