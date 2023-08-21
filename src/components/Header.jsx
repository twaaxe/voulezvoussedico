import React from "react";
import { Link } from 'react-router-dom'

import '../style/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from "./Home";
import Contact from "./Contact";

export default function Header() {
    return (
        <>

            <Navbar id="navbar" expand="lg" className="bg-body-tertiary ">
                <Container className=" ">
                    <Navbar.Brand href="/home"><h3>Voulez-vous Sedico</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/aboutus">About us</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>


    );
}