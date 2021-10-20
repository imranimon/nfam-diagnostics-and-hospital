import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Appointment = () => {
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const onMakeAppointment = data => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Appointment Created on ${data.date}`,
            showConfirmButton: true,
        })
        reset()
    }
    return (
        <div className='m-5'>
            <Row>
                <div className='bg p-2 text-white'>
                    <h3>Make an Appointment</h3>
                </div>
            </Row>
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Col xs={12} md={6}>
                    <form onSubmit={handleSubmit(onMakeAppointment)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input {...register("name", { required: true })}
                                type="text" className="form-control" id="name" />
                            {errors.name && <span className='text-danger'>Name is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input {...register("email", { required: true })}
                                type="email" className="form-control" id="email" />
                            {errors.email && <span className='text-danger'>Email is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Select Date</label>
                            <input {...register("date", { required: true })}
                                type="date" className="form-control" id="date" />
                            {errors.date && <span className='text-danger'>Date is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="doctor" className="form-label">Select a Doctor</label>
                            <select {...register("doctor")} id='doctor'
                                className="form-select mb-3" aria-label="Default select example">
                                <option defaultChecked>Leave Empty</option>
                                <option value="1">Dr. med Tanzila Kamal Chowdhury</option>
                                <option value="2">Dr. med Izhan Hossain</option>
                                <option value="3">Dr. med Moriom Akhter Eti</option>
                                <option value="4">Dr. med Imran Hossain</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Describe Your Problem</label>
                            <textarea {...register("description", { required: true })}
                                className="form-control" id="description" rows="3"></textarea>
                            {errors.description && <span className='text-danger'>Description is required</span>}
                        </div>
                        <div className="mb-3">
                            <input className='btn btn-outline-success' type="submit" />
                        </div>
                    </form>
                </Col>
                <Col xs={12} md={6}>
                    <img className='img-fluid' src="https://i.ibb.co/mNpr7BF/woman-checking-calendar.jpg" alt="" />
                </Col>

            </Row>
        </div>
    );
};

export default Appointment;