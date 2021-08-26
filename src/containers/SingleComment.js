import React from 'react';
import {ListGroupItem} from "react-bootstrap";
import "../styles/Comments.css";

const STYLES = ['comment--mine','comment--somebody'];

export const Comment = ({
    userId,
    authorId,
    content,
    addedAt,
    Id
}) => {

    const checkCommentStyle = (userId === authorId) ? STYLES[0] : STYLES[1];

    return (
        <ListGroupItem id={checkCommentStyle} key={Id}>
            <h6 id={'author'}>{authorId} o {addedAt} pisze:</h6>
            <p id={'content'}>{content}</p>
        </ListGroupItem>
    );

}