import './App.css';
import Layout from "./meta/Layout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import RandomMeme from "./pages/RandomMeme";
import AllMemes from "./pages/AllMemes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddMeme from "./pages/AddMeme";
import Meme from "./components/Meme";
import Navbar from './containers/Navbar';

/*
    DO ZROBIENIE JESZCZE
    + pełna responsywność komentarzy
    + modfyikowanie wstawionego mema
    + dodawanie osobno zdjęcia przez api
    + paginacja
 */

function App() {
    return (
    <Layout>
        <Router>
            <Navbar/>
            <Switch>
                <Route path={"/memes/random"}>
                    <RandomMeme/>
                </Route>
                <Route path={"/memes/add"}>
                    <AddMeme/>
                </Route>
                <Route path={"/memes"}>
                    <AllMemes/>
                </Route>
                <Route path={"/users/login"}>
                    <Login/>
                </Route>
                <Route path={"/users/register"}>
                    <Register/>
                </Route>
                <Route path={"/single-meme"}>
                    <Meme/>
                </Route>
                <Route path={"/"}>
                    <Main/>
                </Route>
            </Switch>
        </Router>
    </Layout>
  );
}

export default App;
