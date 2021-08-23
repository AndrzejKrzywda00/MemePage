import React from "react";
import '../styles/RandomMeme.css';
import Image from "../img/thumbs_up.png";
import {Button, Card} from "react-bootstrap";

/***
 *
 * @param location is a path provided by router
 * @returns {JSX.Element} is an actual element
 */
class RandomMeme extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }

    async componentDidMount() {
        await fetch ('https://s401454.labagh.pl/memes/random',
            {
                Method: "GET",
                headers: new Headers({
                    Accept: '*/*'
                })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({isLoaded: true});
                this.setState({data: data});
            });
    }

    handleLike() {
        if (this.state.data[0].likes === 0) {
            let data = this.state.data;
            data.likes = 1;
            this.setState({data: data});
        }
    }

    render () {
        const {isLoaded, data} = this.state;
        return (
            isLoaded ?
            <div id={"random-meme"}>
                <h1>Losowy mem</h1>
                {data.map(item =>(
                    <Card>
                        <Card.Title id={"card-title"}>
                            {item.title}
                        </Card.Title>
                        <Card.Body>
                            {item.description}
                            {item.year}
                            {item.added_at}
                            {item.likes}
                            {item.views}
                            <Button id="conf-btn" onClick={this.handleLike}>
                                <img src={Image} alt={""} id = "thumbs_up"/>
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
                :
                <p>Loading ...</p>
        );
    }
}

export default RandomMeme;