import React from 'react';
import './Service.css'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, description, price } = props.service;
    return (
        <div>
            <Col>
                <Card className='nfam-animation'>
                    <Card.Img className='img-fixed-size' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.substr(0, 200)}
                        </Card.Text>
                        <Card.Text>
                            Cost: {price}€
                        </Card.Text>
                        <Link to={`/service/${id}`}>
                            <Button variant='outline-success'>See Details</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;