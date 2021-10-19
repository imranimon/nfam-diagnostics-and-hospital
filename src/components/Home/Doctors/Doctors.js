import React, { useEffect, useState }  from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='container mt-1 mb-3'>
            <Row className='bg p-2 text-white mb-3'>
                <h3>Specialist Doctors</h3>
            </Row>
            <Row xs={1} md={2} className="g-4 shadow-lg p-3 bg-body rounded">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </Row>

        </div>
    );
};

export default Doctors;