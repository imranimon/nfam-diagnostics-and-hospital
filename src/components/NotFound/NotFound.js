import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='Container d-flex justify-content-center'>
            <div>
                <div>
                    <img className='img-fluid' src="https://i.ibb.co/wzM3VQ7/404-fehler-page-seiten-titel.jpg" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <Link to='/home'>
                        <button className='btn btn-outline-success m-2'>Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;