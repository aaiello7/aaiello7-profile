import React from "react";

function BackCard (props) {
    return (
        <div className="card back" style={{backgroundColor: props.background}} >
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={(flip) => {props.cardFlip(flip)}}></button>
        </div>)
}

export default BackCard;