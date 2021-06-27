import './App.css';
import Layout from "./meta/Layout";
import SmallMeme from "./components/SmallMeme";
import Logo from "./img/meme_page_logo.png";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import RandomMeme from "./pages/RandomMeme";
import AllMemes from "./pages/AllMemes";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
    return (
    <Layout>
        <Router>
            {/*A navbar with functional links*/}
            <nav className="navbar">
                <img src={Logo} id="logo"/>
                <h1>Galeria memów</h1>
                <div className="links">
                    <Link to={"/"}>Strona domowa</Link>
                    <Link to={"/memes/random"}>Losowy mem</Link>
                    <Link to={"/memes"} id="meme_gallery_link">Wszystkie memy</Link>
                    <Link to={"/users/register"}>Rejestracja</Link>
                    <Link to={"/users/login"}>Logowanie</Link>
                </div>
            </nav>
            {/*A <Switch> looks through its children <Route>'s and renders the first one that matches what we wanted*/}
            <Switch>
                <Route path={"/memes/random"}>
                    <RandomMeme path/>
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
                <Route path={"/"}>
                    <Main path/>
                </Route>
            </Switch>
        </Router>
    </Layout>
  );
}

export default App;
