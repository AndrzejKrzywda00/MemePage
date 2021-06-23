import Logo from '../img/meme_page_logo.png';

const Navbar =()=> {
    return (
        <nav className="navbar">
            <img src={Logo} id="logo"/>
            <h1>Galeria memów</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/memes/random">Losowy mem</a>
                <a href="/memes" id="meme_gallery_link">Wszystkie memy</a>
                <a href="/user">Rejestracja</a>
                <a href="/user">Logowanie</a>
            </div>
        </nav>
    );
}

export default Navbar;