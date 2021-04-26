import React, { useState } from 'react';
import { useSpring , animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Menu() {
    const [menuOn, isMenuOn] = useState(false);


    //Spring effects
    const { opacity, width, transform, display } = useSpring({
        opacity: menuOn ? 0 : 1,
        width: menuOn ? "8vh" : "0vh",
        transform: menuOn ? "translateX(4vh)" : "translateX(0vh)",
        display: menuOn ? "block" : "none",
        config: { duration: 500 },
})

    function openMenu() {
        isMenuOn(!menuOn);
    }

    return (
        <div>
            <animated.div 
                className="menuOpacity"
                style={{opacity: opacity.interpolate(o => 0.6 - o), display}} 
                onClick={openMenu} >
            </animated.div>
            <animated.div className="menuIcon" style={{opacity, transform}} onClick={openMenu}> 
                <FontAwesomeIcon 
                    icon={faBars} color="#00363a" 
                /> 
            </animated.div>
            <animated.div className="menu bg" style={{width}}>
                <p>Home</p>
                <p>Work</p>
                <p>Contact</p>
            </animated.div>
        </div>     
    )
}

export default Menu;
