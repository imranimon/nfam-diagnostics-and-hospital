import React from 'react';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import './Home.css'
import Newsletter from './Newsletter/Newsletter';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id='top'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;