import React from "react";
import {Card} from "react-bootstrap";

const Comments =({comment})=> {
    return (<Card>
            <Card.Title>
                {comment.author_id}
            </Card.Title>
            <Card.Body>
                {comment.added_at}
                {comment.likes}
                {comment.content}
                {comment.meme_id}
            </Card.Body>
        </Card>
    );
}

export default Comments;