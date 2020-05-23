import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

export default function Header(){
    return(
        <Navbar>
            <Container>
            <Navbar.Brand>
                <Nav.Link href='/'>Ismael Mohamed</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}