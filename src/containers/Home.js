import {useState} from 'react';
import MyComponent from '../components/MyComponent';
import Layout from "../meta/Layout";

const Home =({location})=> {

    return(
        <Layout>
            <h1>Home Page <span>{location.pathname}</span></h1>
            <h2>Strona startowa (domowa)</h2>
            <MyComponent/>
        </Layout>
    );
}

export default Home;