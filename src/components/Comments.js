import React from "react";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import '../styles/Comments.css';

class Comments extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            meme_id: localStorage.getItem('meme_id');
            data: []
        }
    }

    async componentDidMount() {
        await fetch('https://s401454.labagh.pl/comments/' + this.state.memeId,
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
                        {data.map(item => (
                            <ListGroupItem id={"comment"}>
                                <h4 id={"author"}>{item.author_id} : {item.added_at}</h4>
                                <p id={"content"}>{item.content}</p>
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