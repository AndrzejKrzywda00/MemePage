import React from "react";
import '../styles/AllMemes.css';

/***
 *
 * @param location is location of this subpage provied by router
 * @returns {JSX.Element} component for displaying list of all memes
 */
const AllMemes = ({location}) => {
    return (
        <div id={"all-memes"}>
            <h1>Strona pokazywania wielu memów</h1>
        </div>
    );
}

export default AllMemes;