import React from "react";
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";

class Comments extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    async componentDidMount() {
        await fetch('https://s108.labagh.pl/comments/',
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
    render() {
        const {isLoaded, data} = this.state;
        return (
            isLoaded ?
                <div id={"all-comments"}>
                    <h1>Komentarze</h1>
                    <ListGroup>
                        {data.map( item => (
                            <ListGroupItem id={"item"}>
                                <h4 id={"author"}>{item.author_id}</h4>
                                <p id={"content"}>{item.content}</p>
                                <Button>
                                    <img src={"../img/thumbs_up.png"} alt={""}/>
                                </Button>
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


export default Comments;