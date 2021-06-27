import Logo from '../img/meme_page_logo.png';
import {Link, Router} from '@reach/router';
import Register from "../pages/Register";

const Navbar =()=> {
    return (
        <div>
            <nav className="navbar">
                <img src={Logo} id="logo"/>
                <h1>Galeria memów</h1>
                <div className="links">
                    <Link to={"/"}>Strona domowa</Link>
                    <Link to={"/memes/random"}>Losowy mem</Link>
                    <Link to={"/memes"} id="meme_gallery_link">Wszystkie memy</Link>
                    <Link to={"/users"}>Rejestracja</Link>
                    <Link to={"/users"}>Logowanie</Link>
                </div>
            </nav>
            <Router basepath={""}>
                <Login path={"/users/login"}/>
                <Register path={"/users/register"}/>
            </Router>
        </div>
    );
}

export default Navbar;