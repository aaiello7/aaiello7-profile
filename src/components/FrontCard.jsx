import React, { useState, useEffect } from "react";
import {animated, useSpring} from 'react-spring';

function FrontCard(props) {
    const [isExpand, setExpand] = useState(true);

    const {width, opacity} = useSpring({
        from: {
            width: "22vw",
            opacity: 0,
        },
        to: {
            width: "86vw",
            opacity: 1,
        },
        config: {
            duration: 500
        },
        cancel: false,
        reverse: !isExpand
    })

    useEffect(() => {
        if (props.closeCall === !isExpand) {
            setExpand(isExpand => !isExpand);
            setTimeout(() => {
                props.expand(isExpand);
            }, 500)
        };
    }, [props] );
    
    function animateExpand () {  
        setExpand(isExpand => !isExpand);
            setTimeout(() => {
                props.expand(isExpand);
            }, 500)
    }

    return (
        <animated.div
            style={{width, opacity,
            backgroundColor: props.background
            }}                
            className="card"
            onClick={animateExpand}
            >
                <h2>{props.title}</h2>
                <animated.img 
                    style={{opacity}} 
                    className="pjImage" 
                    src={props.img} 
                    alt={props.title}
                />        

        </animated.div>
    )
}

export default FrontCard;