import Logo from '../img/meme_page_logo.png';
import {Link} from "react-router-dom";
import React from 'react';
import {Button} from "react-bootstrap";

class Navbar extends React.Component {

    handleLogOut =(event)=> {
        localStorage.setItem('logged',undefined);
        localStorage.setItem('nick',null);
        localStorage.setItem('email',null);
        localStorage.setItem('id',null);
        window.location.reload(true);
    }

    render() {
        if(localStorage.getItem("logged") === "true") {
            return (
                <nav className="navbar" id={"navbar"}>
                    <img src={Logo} id="logo" alt={'none'}/>
                    <h1>Strona z memami</h1>
                    <div id={"links"}>
                        <Link to={"/"}>Strona domowa</Link>
                        <Link to={"/random-meme"}>Losowy mem</Link>
                        <Link to={"/all-memes"} id="meme_gallery_link">Wszystkie memy</Link>
                        <Link to={"/add-meme"}>Dodaj mema</Link>
                        <Link to={"/register"}>Rejestracja</Link>
                        <Button id={'logout'} onClick={this.handleLogOut}>Wyloguj</Button>
                    </div>
                </nav>
            );
        }
        return (
            <nav className="navbar" id={"navbar"}>
                <img src={Logo} id="logo" alt={'none'}/>
                <h1>Strona z memami</h1>
                <div id={"links"}>
                    <Link to={"/"}>Strona domowa</Link>
                    <Link to={"/random-meme"}>Losowy mem</Link>
                    <Link to={"/all-memes"} id="meme_gallery_link">Wszystkie memy</Link>
                    <Link to={"/register"}>Rejestracja</Link>
                    <Link to={"/login"}>Logowanie</Link>
                    <Link to={"/add-meme"}>Dodaj mema</Link>
                </div>
            </nav>
        );
    }

}

export default Navbar;