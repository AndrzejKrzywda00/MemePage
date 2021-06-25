import React from 'react';
import {Button,Card} from "react-bootstrap";

const Meme = (meme)=>{
    return (<Card>
        <Card.Title>
            {meme.title}
        </Card.Title>
        <Card.Body>
            {meme.description}
            {meme.year}
            {meme.added_at}
            {meme.likes}
            {meme.views}
            <Button>
                <img src={"../img/thumbs_up.png"}/>
            </Button>
        </Card.Body>
    </Card>);
}

export default Meme;