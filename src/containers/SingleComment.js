import React from 'react';
import {ListGroupItem} from "react-bootstrap";
import "../styles/Comments.css";

const STYLES = ['comment--mine','comment--somebody'];
const TYPE = ['',''];

export const Comment = ({
    userId,
    authorId,
    content,
    addedAt,
    Id
}) => {

    const checkCommentStyle = (userId === authorId) ? STYLES[0] : STYLES[1];
    const checkCommentDecoration = (userId === authorId) ? TYPE[0] : TYPE[1];

    if(userId === authorId) {
        return (
            <ListGroupItem id={checkCommentStyle} key={Id}>
                <div id={'subtitle'}>
                    <h6 id={'author'}>Edytuj | Usuń</h6>
                    <h6 id={'author'}>{authorId} o {addedAt} pisze:</h6>
                </div>
                <p id={'content'}>{content}</p>
            </ListGroupItem>
        );
    }

    return (
        <ListGroupItem id={checkCommentStyle} key={Id}>
            <div id={'subtitle'}>
                <h6 id={'author'}>{authorId} o {addedAt} pisze:</h6>
            </div>
            <p id={'content'}>{content}</p>
        </ListGroupItem>
    );


}