import React from "react";

export default function Item() {
    const [thingsArray, setArray] = React.useState(['Thing 1', 'Thing 2'])

    function add() {
        setArray(prevArray=>{
            return [...prevArray, `Thing ${prevArray.length+1}`]
        })
    }

    const elements = thingsArray.map(thing=><p key={thing}>{thing}</p>)


    return (
        <main>
            <button onClick={add}>Добавить</button>
            {elements}
        </main>
    )
}