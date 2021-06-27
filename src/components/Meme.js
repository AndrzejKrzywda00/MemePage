import React from 'react';
import {Button,Card} from "react-bootstrap";

const Meme =(data)=> {

    return (
        <Card>
            <Card.Title>
                {data.meme.title}
            </Card.Title>
            <Card.Body>
                {data.meme.description}
                {data.meme.year}
                {data.meme.added_at}
                {data.meme.likes}
                {data.meme.views}
                <Button>
                    <img src={"../img/thumbs_up.png"} alt={""}/>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Meme;