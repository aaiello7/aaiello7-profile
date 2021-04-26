import React from 'react';
import animatedGif from '../images/eye-animation2.gif';


function Cover () {
    return (
        <div className="cover">
            <h3>Check out my latest projects</h3>
            <img src={animatedGif} alt="Check out my projects"/>
        </div>
    )
}

export default Cover;