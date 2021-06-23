import React from "react";
import Layout from "../meta/Layout";

/*
This component provides with view of single meme
 */
const SingleView = ({location}) => {
    return (
        <Layout>
            <h1>To jest strona dla pojedynczego mema. <span>{location.pathname}</span></h1>
            <p>Poniżej musi znajdować się komponent dyskusji (listy komentarzy)</p>
        </Layout>
    )
}