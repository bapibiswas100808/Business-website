import React from 'react';
import Contact from '../../Contact/Contact';
import Services from '../../Services/Services';
import Slider from '../../Slider/Slider';
import SubHeader from '../../SubHeader/SubHeader';

const Home = () => {
    return (
        <>
            <Slider/>
            <Services/>
            <SubHeader/>
            <Contact/>
        </>
    );
};

export default Home;