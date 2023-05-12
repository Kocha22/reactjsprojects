import React from "react";

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)

    let styles = {
        backgroundColor: on ? '#222' : 'transparent'
    }

    function toggle() {
        setOn(prevOn=>!prevOn)
    }
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}