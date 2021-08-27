import React from 'react';
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import '../styles/AllMemes.css';

const Posts = ({posts, loading, handleClickMeme}) => {

    if(loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <ListGroup>
            {posts.map(item => (
                <ListGroupItem id={"item"} key={item.id}>
                    <h4 id={"title"}>{item.title}</h4>
                    <p id={"content"}>{item.description}</p>
                    <Button id={"see-meme"} size={"sm"} onClick={handleClickMeme} meme_id={item.id}>Zobacz mema</Button>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default Posts;