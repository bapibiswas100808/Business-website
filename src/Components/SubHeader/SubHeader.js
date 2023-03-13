import React from 'react';
import SubImage from "../../images/bbbb.avif"
import "./SubHeader.css"

const SubHeader = () => {
    return (
        <section className='sub-header'>
            <div className='sub-image'>
            <img src={SubImage} alt=''/>
            </div>
            <div className='sub-text'>
            <h2> <span>Mission</span> Is To Protect Your Businesses & Much More to Secure <span>Success!</span></h2>
            </div>

        </section>
    );
};

export default SubHeader;