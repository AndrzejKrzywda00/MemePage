import Logo from '../img/meme_page_logo.png';
import Register from "../pages/Register";
import RandomMeme from "../pages/RandomMeme";
import Main from "../pages/Main";
import AllMemes from "../pages/AllMemes";
import Login from "../pages/Login";
import {BrowserRouter as Router, Link} from "react-router-dom";
import React from 'react';
import {Button} from "react-bootstrap";

class Navbar extends React.Component {


    constructor(props) {
        super(props);
    }

    handleLogOut =(event)=> {
        localStorage.setItem('logged',undefined);
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
                        <Link to={"/memes/random"}>Losowy mem</Link>
                        <Link to={"/memes"} id="meme_gallery_link">Wszystkie memy</Link>
                        <Link to={"/users/register"}>Rejestracja</Link>
                        <Link to={"/memes/add"}>Dodaj mema</Link>
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
                    <Link to={"/memes/random"}>Losowy mem</Link>
                    <Link to={"/memes"} id="meme_gallery_link">Wszystkie memy</Link>
                    <Link to={"/users/register"}>Rejestracja</Link>
                    <Link to={"/users/login"}>Logowanie</Link>
                    <Link to={"/memes/add"}>Dodaj mema</Link>
                </div>
            </nav>
        );
    }

}

export default Navbar;