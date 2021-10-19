import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import footerImage from '../../../images/NFam-footer-logo.png'

const Footer = () => {
    return (
        <div className='bg-footer p-2'>
            <Row className='w-100'>
                <Col md={4} sm={12} >
                    <img className='img-fluid' src={footerImage} alt="" />
                </Col>
                <Col md={8} sm={12}>
                    <Row>
                        <Col md={6} sm={12}>
                            <h5>NFam Diagnostics And Hospital<br />Dhanmondi</h5>
                            <address>
                                <p>Beta Street 57<br />Dhaka-1245</p>
                                <p><i className="fas fa-tty text-success"></i> +029587464</p>
                            </address>
                        </Col>
                        <Col md={6} sm={12}>
                            <h5>NFam Diagnostics And Hospital<br />Bashundhara</h5>
                            <address>
                                <p>Gamma Street 110<br />Dhaka-1229</p>
                                <p><i className="fas fa-tty text-success"></i> +029587465</p>
                            </address>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='p-3 d-flex justify-content-center border-top border-1 border-danger'>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/">
                                        <i className="fab fa-facebook text-primary fs-4"></i>
                                    </a>
                                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/?hl=en">
                                        <i className="fab fa-instagram text-danger ms-2 fs-4"></i>
                                    </a>
                                    <a target='_blank' rel="noreferrer" href="https://www.youtube.com/">
                                        <i className="fab fa-youtube text-danger ms-2 fs-4"></i>
                                    </a>
                                </div>
                                <p>&copy;NFam Diagnostics And Hospital </p>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;