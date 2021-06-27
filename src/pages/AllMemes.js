import React from "react";
import Layout from "../meta/Layout";

/***
 *
 * @param location is location of this subpage provied by router
 * @returns {JSX.Element} component for displaying list of all memes
 */
const AllMemes = ({location}) => {
    return (
        <Layout>
            <h1>Strona pokazywania wielu memów<span>{location.pathname}</span></h1>
        </Layout>
    );
}

export default AllMemes;