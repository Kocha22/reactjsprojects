import React from "react";

export default function Meme2() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllmemeImages] = React.useState([])

    React.useEffect(()=> {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllmemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random()*allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(e) {
        const {name, value} = e.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input 
                type="text"
                placeholder='Top text'
                className='form--inputs'
                name="topText"
                value={meme.topText}
                onChange={handleChange}/>
                <input 
                type="text"
                placeholder='Bottom text'
                className='form--inputs'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}/>
                <button 
                onClick={getMemeImage}
                className='form--button'>
                    Get a new meme image
                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}