import React from "react";
import jokes from "../jokes";
import Joke from "./Joke";

export default function Header() {
    const elements = jokes.map(function(joke) {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {elements}
        </div>
    )
}