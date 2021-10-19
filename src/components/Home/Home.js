import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    return (
        <div id='top'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;