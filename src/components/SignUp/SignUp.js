import { Button } from 'bootstrap';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const SignUp = () => {

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
                    <h3>Please Sign-Up</h3>
                </div>
            </Row>
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Col xs={12} md={6}>
                    <img style={{maxHeight:'500px'}} className='img-fluid' src="https://i.ibb.co/Np2v9pn/person-using-tablet.jpg" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mb-2'>
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
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
                            Already Signed-Up?
                            <Link className='ms-1' to='/signin'>Sign-In</Link>
                        </span>
                    </div>
                    <div>
                        <button onClick={handleSignIn} className='btn btn-outline-success'>
                            <i className="fab fa-google me-1"></i>Sign In using Google</button>
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default SignUp;