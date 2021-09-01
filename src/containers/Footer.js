import '../styles/Footer.css';
import React from "react";

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time:new Date()}
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        setInterval(()=> this.currentTime(),1000);
    }

    render() {
        return (
            <footer id={"footer"}>
                <p id={"footer-string"}>Strona wykonana przez zespół w składzie: Andrzej Krzywda, Wojtek Mościński, Kamil Łukasik</p>
                <h2 id={"time-string"}>
                    {this.state.time.toLocaleTimeString()}
                </h2>
            </footer>
        );
    }
}

export default Footer;