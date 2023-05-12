import React from "react";

export default function Star(props) {
    let starIcon = props.isFilled ? 'star.png' : 'star-empty.png'
    
    return (
        <img src={`../images/${starIcon}`}
        className="card--favorite" 
        onClick={props.handleClick}
        alt="star"/>
    )
}