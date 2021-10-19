import { Button } from 'bootstrap';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className='m-5'>
            <Row>
                <div className='bg p-2 text-white'>
                    <h3>Make an Appointment</h3>
                </div>
            </Row>
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Col xs={12} md={6}>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="description" className="form-label">Describe Your Problem</label>
                            <textarea className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <select className="form-select mb-3" aria-label="Default select example">
                            <option selected>Select Doctor</option>
                            <option value="1">Dr. med Tanzila Kamal Chowdhury</option>
                            <option value="2">Dr. med Izhan Hossain</option>
                            <option value="3">Dr. med Moriom Akhter Eti</option>
                            <option value="4">Dr. med Imran Hossain</option>
                        </select>
                    </form>
                    <button className='btn btn-outline-success'>Submit</button>
                </Col>
                <Col xs={12} md={6}>
                    <img className='img-fluid' src="https://i.ibb.co/mNpr7BF/woman-checking-calendar.jpg" alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default Appointment;