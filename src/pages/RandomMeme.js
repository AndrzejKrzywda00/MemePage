import React from "react";
import Layout from "../meta/Layout";

/***
 *
 * @param location is a path provided by router
 * @returns {JSX.Element} is an actual element
 */
const RandomMeme = ({location}) => {
    return (
        <Layout>
            <h1>To jest strona dla pojedynczego mema. <span>{location.pathname}</span></h1>
            <p>Poniżej musi znajdować się komponent dyskusji (listy komentarzy)</p>
        </Layout>
    );
}

export default RandomMeme;