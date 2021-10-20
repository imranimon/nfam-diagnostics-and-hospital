import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const Newsletter = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubscribe = (data) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `You will be notified on ${data.email}`,
            showConfirmButton: false,
            timer: 1500
        })
        reset();
    }
    return (
        <Row className='border border-2 m-2'>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                <div>
                    <h3>Subscribe to Newsletter</h3>
                    <p>Our e-mail newsletter informs you regularly about<br />current topics and events.</p>
                    <form onSubmit={handleSubmit(onSubscribe)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input {...register("email", { required: true })}
                                type="email" className="form-control" id="email" />
                            {errors.email && <span className='text-danger'>Email is required</span>}
                        </div>
                        <p>I have read the privacy policy and accept it.</p>
                        <div className="mb-3">
                            <input className='btn btn-outline-success' type="submit" value='Subscribe' />
                        </div>
                    </form>
                </div>

            </Col>
            <Col xs={12} md={6}>
                <img src="https://i.ibb.co/mDhVH8x/Woman-receiving-mail-and-reading-letter-Person-getting-contract-with-signature-out-of-envelope-Flat.jpg" alt="" className='img-fluid' />
            </Col>
        </Row>
    );
};

export default Newsletter;