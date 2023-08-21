import React from "react";
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../style/Header.css'

export default function Header() {
    return (
        <>
            <Navbar id="navbar" expand="lg" className="bg-body-tertiary ">
                <Container className=" ">

                    <Navbar.Brand as={Link} to="/home"><h3>Voulez-vous Sedico</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/Aboutus">About us</Link>
                            <Link to="/Contact">Contact</Link>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}
