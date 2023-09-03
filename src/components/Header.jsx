import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../style/Header.css'


export default function Header() {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
                <Container>
                    <Navbar.Brand href="home">Voulez-vous Sedico</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ color: "#1089FF" }}>
                            <Nav.Link href="home">Pro</Nav.Link>
                            <Nav.Link href="home">Particulier</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="aboutus" style={{ color: "#1089FF" }}>About us</Nav.Link>
                            <Nav.Link eventKey={2} href="contact" style={{ color: "#1089FF" }}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
