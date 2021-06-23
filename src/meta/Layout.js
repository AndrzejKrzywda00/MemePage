import React from 'react';
//import {Link} from 'gatsby';
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";

/*
Layout defines general look of the application
Navbar on top
Main in the middle where content starts
Footer at the bottom
 */
const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;