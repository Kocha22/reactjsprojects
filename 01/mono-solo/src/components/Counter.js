import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount +1)
    }

    function substract() {
        setCount(prevCount => prevCount -1)
    }

    return (
        <div>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <h1>{count}</h1>
        </div>
    )
}