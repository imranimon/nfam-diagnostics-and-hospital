import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Doctor = (props) => {
    const { name, expert, img, rating } = props.doctor;

    return (
        <div>
            <Col>
                <div className="card mb-3 nfam-animation">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h6 className="card-title">{expert}</h6>
                                <p className="card-text text-warning"><Rating
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    initialRating={rating}
                                    readonly
                                /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Doctor;