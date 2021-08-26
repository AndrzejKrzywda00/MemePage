import React from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import '../styles/Comments.css';

class Comments extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            meme_id: localStorage.getItem('meme_id'),
            data: []
        }
    }

    async componentDidMount() {

        await new Promise( r => setTimeout(r,300));
        this.setState({meme_id: localStorage.getItem('meme_id')});

        await fetch('https://s401454.labagh.pl/comments/' + this.state.meme_id,
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
                    <h1 id={'comments-title'}>Komentarze:</h1>
                    <ListGroup>
                        {data.map(item => (
                            <ListGroupItem id={"comment"} key={item.id}>
                                <h6 id={"author"}>{item.author_id} o {item.added_at} pisze:</h6>
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