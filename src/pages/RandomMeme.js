import React from "react";
import '../styles/RandomMeme.css';
import GetRandomMeme from "../meta/GetRandomMeme";
import Meme from "../components/Meme";
import GetMemes from "../meta/GetMemes";

/***
 *
 * @param location is a path provided by router
 * @returns {JSX.Element} is an actual element
 */
const RandomMeme = ({location}) => {

    const data = GetRandomMeme();

    return (
        <div id={"random-meme"}>
            <h1>Losowy mem</h1>
            <Meme meme={data}/>
        </div>
    );
}

export default RandomMeme;