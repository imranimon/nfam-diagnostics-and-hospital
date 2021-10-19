import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth()
    const prevLocation = useLocation();
    const redirect_url = prevLocation.state?.from || '/';
    const history = useHistory()
    const handleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)

            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className='container mt-1'>
            <Row>
                <div className='bg p-2 text-white'>
                    <h3>Please Sign</h3>
                </div>
            </Row>
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Col xs={12} md={6}>
                    <img style={{maxHeight:'500px'}}  className='img-fluid' src="https://i.ibb.co/QH968VC/3094352.jpg" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mb-2'>
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                        </form>
                        <button className='btn btn-outline-success'>Submit</button>
                        <span className='ms-2'>
                            New To NFam?
                            <Link className='ms-1' to='/signup'>Sign-Up</Link>  
                        </span>
                    </div>

                    <div>
                        <Button onClick={handleSignIn} variant='outline-success'>
                        <i className="fab fa-google me-1"></i>Sign In using Google
                        </Button>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default SignIn;