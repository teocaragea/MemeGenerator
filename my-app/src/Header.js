import meme from './meme.png';
export default function Header() {
    return ( 
        <header className="header">
            <img src={meme} className="header--image"></img>
            <h1 className="header--title">Meme Generator</h1>
            <h4 className="header--subtitle"> React Course  - Project 3 </h4>
        </header>
    );
}