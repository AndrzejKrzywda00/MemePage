import React from "react";
import Layout from "../meta/Layout";

/*
This page prepares view of list of many memes
 */
const MultipleView = ({location}) => {
    return (
        <Layout>
            <h1>Strona pokazywania wielu memów<span>{location.pathname}</span></h1>
        </Layout>
    )
}

export default MultipleView;