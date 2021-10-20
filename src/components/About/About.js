import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="text-center p-5 d-flex justify-content-center">
            <div>
                <Row className="w-100">
                    <h1 className='text-secondary'>Welcome to the NFam Diagnostics And Hospital</h1>
                    <p className="mt-2">NFam Diagnostics And Hospital Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. NFam Diagnostics And Hospital Limited is one of the ventures of NFam Group which is the top business group of the country.</p>
                    <p className="mt-2">The reputation of NFam Diagnostics And Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, NFam Diagnostics And Hospital strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>

                </Row>
                <Row className="mt-5 w-100">
                    <h1 className='text-secondary'>We Care For Your Health</h1>
                    <ListGroup className="mt-2">
                        <ListGroup.Item>
                            <span className="fw-bold fst-italic">Best Child Specialist:</span> Department of Pediatrics II (Pediatric Nephrology, Gastroenterology, and Endocrinology) at NFam Diagnostics And Hospital provides care for children and adolescents suffering from diseases affecting their kidney, urinary system, gastrointestinal tract, pancreas, biliary tract, liver, and endocrinal glands as well as nutritional disorders.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fw-bold fst-italic">Best Laboratories:</span> As our understanding of clinical chemistry advances, so too does our ability to test for the markers of disease and bodily imbalance. Medical testing laboratories (also known as clinical laboratories) are laboratories which have all the necessary equipment and staff to perform clinical pathology testing on patient specimens.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fw-bold fst-italic">100 ICU Beds:</span> Intensive care refers to the specialised treatment given to patients who are acutely unwell and require critical medical care. An intensive care unit (ICU) provides the critical care and life support for acutely ill and injured patients.
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
            </div>
        </div>
    );
};

export default About;