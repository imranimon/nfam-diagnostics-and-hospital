import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (
        <Row className='border border-2 m-2'>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                <div>
                    <h3>Subscribe to Newsletter</h3>
                    <p>Our e-mail newsletter informs you regularly about<br />current topics and events.</p>
                    <form>
                        <label htmlFor="email" className='form-label'>Email*</label>
                        <input className='form-control' type="email" name='email' id='email' />
                    </form>
                    <p>I have read the privacy policy and accept it.</p>
                    <Button variant='outline-success'>Register</Button>
                </div>

            </Col>
            <Col xs={12} md={6}>
                <img src="https://i.ibb.co/mDhVH8x/Woman-receiving-mail-and-reading-letter-Person-getting-contract-with-signature-out-of-envelope-Flat.jpg" alt="" className='img-fluid' />
            </Col>
        </Row>
    );
};

export default Newsletter;