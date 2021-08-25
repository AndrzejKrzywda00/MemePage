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
    + cały komponent bloku komentarzy, pojedycznego komenatarza i pobieranie danych z API do niego
    + cały wygląd pojedynczego mema - duży
    + handling klikania w przycisk żeby otworzyć mema w liście wszystkich memów
    + dodawanie swojego mema (po zalogowaniu)(react-bootstrap)
    + usuwanie, dodawanie, modyfikowanie komentarzy po zalogowaniu
 */

function App() {
    return (
    <Layout>
        <Router>
            <Navbar/>
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
                    <Meme/>
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
