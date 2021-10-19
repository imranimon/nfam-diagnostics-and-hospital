import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 max-height"
                        src="https://i.ibb.co/m8NThvP/CT-Scan.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>CT-Scan in ICU</h3>
                        <p>Makes difference having CT-Scan on ICU</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 max-height"
                        src="https://i.ibb.co/smX0twb/mri.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>MRI</h3>
                        <p>World Class MRI in our hospital</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 max-height"
                        src="https://i.ibb.co/d4W0j3b/heart.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We care for your heart</h3>
                        <p>We have the best heart specialist in town</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;