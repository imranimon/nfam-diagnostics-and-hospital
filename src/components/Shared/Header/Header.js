import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/NFam-logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const { user, logOut, setIsLoading } = useAuth()
    const history = useHistory()
    const handleSignOut = () => {
        logOut()
            .then(() => {
                history.push('/')
            })
            .finally(() => setIsLoading(false))
    }
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
                            <Nav.Link as={Link} to="/appointment">Make Appointment</Nav.Link>
                            <Nav.Link as={Link} to="/about">About US</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.email ?
                                <Button onClick={handleSignOut} variant='light'>Logout</Button> :
                                <Nav.Link as={Link} to="/signin">Sign-In</Nav.Link>
                            }
                            {user.displayName &&
                                <Navbar.Text className='ms-2'>
                                    Signed in as: <a href="#">{user.displayName}</a>
                                </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
