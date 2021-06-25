import './App.css';
import Layout from "./meta/Layout";
import MemeTripleView from "./containers/MemeTripleView"
import Home from "./containers/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyComponent from "./components/MyComponent";

function App() {
    return (
    <Layout>
        <h1>Witaj na stronie o memach!</h1>
        <MyComponent/>
    </Layout>
  );
}

export default App;
