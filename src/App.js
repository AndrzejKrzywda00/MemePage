import './App.css';
import Layout from "./meta/Layout";
import Logo from "./img/meme_page_logo.png";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import RandomMeme from "./pages/RandomMeme";
import AllMemes from "./pages/AllMemes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddMeme from "./pages/AddMeme";
import MemeSingleView from "./components/MemeSingleView";

/*
    DO ZROBIENIE JESZCZE
    + mechanizm weryfikacji użytkownika - logowanie - dodać wylogowywanie + żeby działało solidnie
    + cały komponent bloku komentarzy, pojedycznego komenatarza i pobieranie danych z API do niego
    + cały wygląd pojedynczego mema - duży
    + handling klikania w przycisk żeby otworzyć mema w liście wszystkich memów
    + dodawanie swojego mema (po zalogowaniu)(react-bootstrap)
    + usuwanie, dodawanie, modyfikowanie komentarzy po zalogowaniu
 */

function App() {
    localStorage.setItem('logged',false);
    localStorage.setItem('data',{});
    return (
    <Layout>
        <Router>
            {/*A navbar with functional links*/}
            <nav className="navbar" id={"navbar"}>
                <img src={Logo} id="logo"/>
                <h1>Galeria memów</h1>
                <div id={"links"}>
                    <Link to={"/"}>Strona domowa</Link>
                    <Link to={"/memes/random"}>Losowy mem</Link>
                    <Link to={"/memes"} id="meme_gallery_link">Wszystkie memy</Link>
                    <Link to={"/users/register"}>Rejestracja</Link>
                    <Link to={"/users/login"}>Logowanie</Link>
                    <Link to={"/memes/add"}>Dodaj mema</Link>
                </div>
            </nav>
            {/*A <Switch> looks through its children <Route>'s and renders the first one that matches what we wanted*/}
            <Switch>
                <Route path={"/memes/random"}>
                    <RandomMeme path/>
                </Route>
                <Route path={"/memes/add"}>
                    <AddMeme/>
                </Route>
                <Route path={"/memes"}>
                    <AllMemes path={"/memes"}/>
                </Route>
                <Route path={"/users/login"}>
                    <Login path/>
                </Route>
                <Route path={"/users/register"}>
                    <Register/>
                </Route>
                <Route path={"/single-meme"}>
                    <MemeSingleView/>
                </Route>
                <Route path={"/"}>
                    <Main path/>
                </Route>
            </Switch>
        </Router>
    </Layout>
  );
}

export default App;
