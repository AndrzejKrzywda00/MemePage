import './App.css';
import Layout from "./meta/Layout";
import MemeTripleView from "./containers/MemeTripleView"
import Home from "./containers/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyComponent from "./components/MyComponent";
import Meme from "./components/Meme";
import GetMemes from "./meta/GetMemes";
import SmallMeme from "./components/SmallMeme";
import {Pagination} from "react-bootstrap";
import Comments from "./components/Comments";

function App() {

    const props = {"id": 1};
    const meme = GetMemes(props);

    return (
    <Layout>
        <h1>Witaj na stronie o memach!</h1>
        <MyComponent/>
    </Layout>
  );
}

export default App;
