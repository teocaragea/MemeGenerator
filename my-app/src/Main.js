import React from "react"
import datas from './memesData.js'

export default function Main() {
    let img;
    function randomNumber(){
        return Math.round(Math.random() * datas.data.memes.length);
    }
    
    function handleClick(){
        let nr = randomNumber();
        img = datas.data.memes[nr].url;
        console.log(nr);
        console.log(img);
    }

    return (
        <main>
            <div className="form">
                <input 
                type="text"
                className="form--input"
                placeholder="Top text"
                />
                <input type="text" 
                className="form--input" 
                placeholder="Bottom text"
                />
                <button className="form--button" onClick={handleClick}>Get a new meme image</button>
            </div>
            <img className="meme" src={img}></img>
        </main>
    );
}