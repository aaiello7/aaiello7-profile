import React, {useState, useRef} from 'react';
import {useSpring, useTransition, useChain, animated, config} from 'react-spring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import Projects from './Projects';
import projects from '../Projects-db';

function Cover(props) {
    const [closed,
        setClosed] = useState(true);
    
    const [scrollOffset,
        setScrollOffset] = useState(0);

    const { scroll } = useSpring({
        scroll: ((76.8) * (scrollOffset - 1)) + 19.4,
        from: { scroll: 0 },
        config: config.stiff,
    })

    const darken = useRef()
    const darkenProps = useSpring({
        ref: darken,
        from: {
            opacity: "0",
            backgroundColor: "#00363a",
        },
        to: {
            opacity: "0.25",
            backgroundColor: "black",
        },
        config: {
            duration: 700
        },
        reverse: !closed
    });

    const loadTiles = useRef()
    const transition = useTransition(!closed ? [] : projects, {
        ref: loadTiles,
        trail: 1000 / projects.length,
        from: {
            opacity: 0,
            height: "0vh",
            marginTop: '-5vh',
        },
        enter: {
            opacity: 1,
            height: "45vh",
            marginTop: '5vh',
        },
        leave: {
            opacity: 0,
            height: "0vh",
            marginTop: '-5vh',
        },
        config: config.molasses
    })

    const ip = i => rads => `translateY(${ 7 * Math.sin(rads + (i * 2 * Math.PI) / 1.7)}px)`;
    const danceTiles = useRef()
    const {
        radians
    } = useSpring({
        ref: danceTiles,
        from: {
                radians: 0
            },
        to: (async next => {
                while (true) 
                    await next({
                        radians: 2 * Math.PI,
                        reset: true
                    })
            }),
        config: {
                ...config.molasses,
                duration: 5000
            },
        cancel: false,
        reverse: false
    });

    useChain(closed
        ? [darken, loadTiles, danceTiles]
        : [loadTiles, darken], [0.7, 0.7])

    return (
        <div className="tiles">
            <animated.div
                className="tile-bg" 
                style={{...darkenProps}}>
            </animated.div>
            <FontAwesomeIcon
                onClick={() => {
                    setClosed(closed => !closed);
                    setTimeout(() => {
                        props.isClosed(!closed)
                    }, 1500);
                }}
                className="rightIcon"
                icon={faTimes}
                size="2x"
                color="white"/>
            <animated.div  
            scrollLeft={scroll} 
            className="tileScroll">
            {transition((props, project) => (
                <animated.div
                    className="project-tile"
                    style={{
                    ...props,
                    transform: radians.interpolate(ip(project.id))
                    }}>
                        <Projects
                            id={project.id}
                            closeCall={closed}
                            background={project.background}
                            img={project.img}
                            title={project.title}
                            offset={(scrollOffset) => {setScrollOffset(scrollOffset); console.log("Offset: " + scrollOffset)}}
                        />
                </animated.div>
            ))}
            </animated.div>

        </div>
    )
}

export default Cover;
