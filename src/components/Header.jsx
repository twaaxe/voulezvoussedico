import React from "react";
import { Link } from 'react-router-dom'
import '../style/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";

export default function Header() {
    return (
        <>

            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container className=" ">
                    <Navbar.Brand href="#home"><h3>Voulez-vous Sedico</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#adress">Nous trouver</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            <Nav className="Header justify-content-center my-3 fw-bolder fs-2">
                <Nav.Item>
                    <Nav.Link href="/Home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="Contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="Adress">Adress</Nav.Link>
                </Nav.Item>
            </Nav>

        </>


    );
}