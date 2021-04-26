import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring'

import ProjectsTiles from './ProjectsTiles';
import Cover from './Cover';

function Work() {
    const [isTiles,
        setTiles] = useState(false);
    const transition = useTransition(isTiles, {
        from: {
            opacity: 0,
            height: "0vh"
        },
        enter: {
            opacity: 1,
            height: "55vh"
        },
        leave: {
            opacity: 0,
            height: "0vh"
        },
        config: {
            duration: 700
        }
    })

    return (
        <div className="work">
            {transition((props, item) => (!item
                ? <animated.div
                    style={{...props}}
                    onClick={() => setTiles(!isTiles)}>
                        <Cover/>
                </animated.div>

                : <animated.div style={{...props}}>
                    <ProjectsTiles 
                    isClosed={(closed) => setTiles(closed)}/>
                </animated.div>))}
        </div>
    )
}

export default Work;
