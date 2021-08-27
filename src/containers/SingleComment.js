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
    authorNick,
    Id,
    handleRemoveComment,
    handleEditComment
}) => {

    const checkCommentStyle = (userId === authorId) ? STYLES[0] : STYLES[1];
    const checkCommentDecoration = (userId === authorId) ? TYPE[0] : TYPE[1];

    if(userId === authorId) {
        return (
            <ListGroupItem id={checkCommentStyle} key={Id}>
                <div id={'subtitle'}>
                    <a id={'link'} onClick={handleEditComment}>Edytuj</a>
                    <a id={'link'} onClick={handleRemoveComment}>Usuń</a>
                </div>
                <h6 id={'author'}>O {addedAt} piszesz:</h6>
                <p id={'content'}>{content}</p>
            </ListGroupItem>
        );
    }

    return (
        <ListGroupItem id={checkCommentStyle} key={Id}>
            <div id={'subtitle'}>
                <h6 id={'author'}>{authorNick} o {addedAt} pisze:</h6>
            </div>
            <p id={'content'}>{content}</p>
        </ListGroupItem>
    );


}