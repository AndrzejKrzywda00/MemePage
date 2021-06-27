import React from "react";
import '../styles/AllMemes.css';
import {ListGroup, ListGroupItem, Button} from "react-bootstrap";
import GetMemes from "../meta/GetMemes";

/***
 *
 * @param location is location of this subpage provied by router
 * @returns {JSX.Element} component for displaying list of all memes
 */
const AllMemes = ({location}) => {

    const data = GetMemes();

    return (
        <div id={"all-memes"}>
            <h1>Wszystkie memy</h1>
            <h2>Tu znajdziesz wszystkie wątki na naszej stronie</h2>
            <ListGroup>
                {data.map( item => (
                    <ListGroupItem id={"item"}>
                        <h4 id={"title"}>{item.title}</h4>
                        <p id={"content"}>{item.description}</p>
                        <Button id={"see-meme"} size={"sm"}>Zobacz mema</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}

export default AllMemes;