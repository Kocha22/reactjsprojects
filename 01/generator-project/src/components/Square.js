import React from "react";
import boxes from "../boxes";
import Box from "./Box";

export default function Square(props) {
    const [squares, setSquare] = React.useState(boxes)

    let styles ={
        backgroundColor: props.darkMode ? '#222' : '#ccc'
    }

    let elements = squares.map(function(item) {
        return <Box style={styles} key={item.id} on={item.on} />
    })


    return (
        <div>{elements}</div>
    )
}