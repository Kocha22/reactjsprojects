import React from "react";

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h1>Setup: {props.setup}</h1>}
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}