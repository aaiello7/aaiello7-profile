import React, {useState} from "react";
import { animated, useSpring } from 'react-spring';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

import FrontCard from './FrontCard';
// import BackCard from './BackCard';



function Projects(props) {
    const [flip, isFlipped] = useState (false);
    const [open, setOpened] = useState (false);

    const expandProps = useSpring({
        from: {
            marginRight: '0vw',
            marginLeft: '0vw',
        },
        to: {
            marginRight: '10vw',
            marginLeft: '10vw',
        },
        config: {
            duration: 500
        },
        reverse: !open
    })
    
    function cardFlip(e) {
        e.preventDefault();
        isFlipped(!flip);
    }

    return (
        <animated.div 
        className="project"
        style={expandProps}>
            {/* <FontAwesomeIcon 
                onClick={(click) => {props.isClicked(click)}}
                className="rightIcon" icon={faTimes} size="2x" color="white" /> */}
                {!open 
                ? <div 
                onClick={() => {
                    setOpened(open => !open);
                    props.offset(props.id)
                }}
                className="textTile upright">
                    <p>{props.title}</p>
                </div>
                : 
                <div>
                    <FrontCard
                        closeCall={props.closeCall}
                        expand={() => {setOpened(open => !open)}}
                        cardFlip={cardFlip}
                        background={props.background}
                        img={props.img}
                        title={props.title}
                    />
                    {/* <BackCard
                        cardFlip={cardFlip}
                        background={props.background}
                        description={props.description}
                        title={props.title}
                    /> */}
                </div> 
                }
        </animated.div>
    )
}

export default Projects;