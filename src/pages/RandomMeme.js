import React from "react";
import '../styles/RandomMeme.css';
/***
 *
 * @param location is a path provided by router
 * @returns {JSX.Element} is an actual element
 */
const RandomMeme = ({location}) => {
    return (
        <div id={"random-meme"}>
            <h1>To jest strona dla losowego mema.</h1>
            <p>Poniżej musi znajdować się komponent dyskusji (listy komentarzy)</p>
        </div>
    );
}

export default RandomMeme;