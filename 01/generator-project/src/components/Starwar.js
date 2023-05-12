import React from "react";

export default function Starwar() {
    const [count, setCount] = React.useState(1)

    const [starWarsData, setStarWarsData] = React.useState({})

    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res=>res.json())
            .then(data=>setStarWarsData(data))
    }, [count])

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount=>prevCount+1)}>Добавить</button>
        </div>
    )
}