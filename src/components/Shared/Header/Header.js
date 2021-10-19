import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/NFam-logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home/#top">
                        <img
                            src={logo}
                            width="300"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='ms-5'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="#features">Features</Nav.Link>
                            <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="#deets">More deets</Nav.Link>
                            <Nav.Link as={Link} to="#memes">Dank memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;