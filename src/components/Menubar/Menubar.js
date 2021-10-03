import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/baller-logo-3.png'
import './Menubar.css';

const Menubar = () => {
    return (
        <Navbar className="py-5" expand="lg">
            <Container className="py-5" >
                <Navbar.Brand className="pt-4" href="#home"><img width="200px" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <NavLink className="fw-bold fs-5 text-decoration-none pe-3 navlink" to="/home">Home</NavLink>
                        <NavLink className=" fw-bold fs-5 text-decoration-none pe-3 navlink" to="/sports">Sports</NavLink>
                        <NavLink className="fw-bold fs-5 text-decoration-none pe-3 navlink" to="/aboutUs">About Us</NavLink>
                        <NavLink className="fw-bold fs-5 text-decoration-none pe-3 navlink" to="/contactUs">Contact Us</NavLink>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;