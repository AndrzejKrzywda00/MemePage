import React from "react";
import '../styles/AllMemes.css';
import {ListGroup, ListGroupItem, Button} from "react-bootstrap";

class AllMemes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }

    async componentDidMount() {
        await fetch('https://s401454.labagh.pl/memes/',
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.json())
            .then(data => {
                this.setState({isLoaded: true});
                this.setState({data: data});
            });
    }

    handleClickMeme(memeId) {
        // download all data by meme_id
        // so -> memes(id), comments(meme_id), images(meme_id)
        // redirect to fresh page with all information displayed
        console.log('handling to show meme with meme_id === ' + memeId);
    }

    render() {
        const {isLoaded, data} = this.state;
        return (
                isLoaded ?
                    <div id={"all-memes"}>
                        <h1>Wszystkie memy</h1>
                        <ListGroup>
                            {data.map(item => (
                                <ListGroupItem id={"item"} key={item.id}>
                                    <h4 id={"title"}>{item.title}</h4>
                                    <p id={"content"}>{item.description}</p>
                                    <Button id={"see-meme"} size={"sm"} onClick={()=>{this.handleClickMeme(item.id)}}>Zobacz mema</Button>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        <br/>
                    </div>
                    :
                    <p>Loading ...</p>
        );
    }
}

export default AllMemes;