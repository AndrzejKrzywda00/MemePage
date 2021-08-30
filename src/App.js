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
import MemeEditor from "./components/MemeEditor";
import CommentEditor from "./components/CommentEditor";

function App() {
    return (
    <Layout>
        <Router>
            <Navbar/>
            <Switch>
                <Route path={"/random-meme"}>
                    <RandomMeme/>
                </Route>
                <Route path={"/add-meme"}>
                    <AddMeme/>
                </Route>
                <Route path={"/all-memes"}>
                    <AllMemes/>
                </Route>
                <Route path={"/login"}>
                    <Login/>
                </Route>
                <Route path={"/register"}>
                    <Register/>
                </Route>
                <Route path={"/single-meme"}>
                    <Meme/>
                </Route>
                <Route path={"/edit-meme"}>
                    <MemeEditor/>
                </Route>
                <Route path={"/edit-comment"}>
                    <CommentEditor/>
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
