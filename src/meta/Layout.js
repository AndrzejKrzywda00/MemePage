import React from 'react';
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
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;