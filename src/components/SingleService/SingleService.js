import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const SingleService = () => {
    const [services] = useServices()
    const [selectedService, setSelectedService] = useState({})
    const { sID } = useParams()
    useEffect(() => {
        const selectedOne = services?.filter(serv => serv?.id == sID)
        setSelectedService(selectedOne[0])
        console.log(selectedOne)
    }, [services])
    return (
        <div>
            <Row className='container m-5'>
                <Col>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={selectedService?.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{selectedService?.name}</h5>
                                    <p className="card-text">{selectedService?.description}</p>
                                    <p className="card-text">Price: {selectedService?.price}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SingleService;