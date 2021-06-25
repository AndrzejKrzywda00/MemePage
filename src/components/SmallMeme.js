import React from 'react';
import {Card, Button} from "react-bootstrap";
import Image from '../img/meme_thumbnail.png';

const SmallMeme = ({meme}) => {
    return (
        <Card>
            <Card.Img variant={"top"} src={Image}/>
            <Card.Body>
                <Card.Title>{meme.title}</Card.Title>
                <Card.Text>
                    <div>
                        <h5>Wyjaśnienie obrazka:</h5>
                        {meme.description}
                    </div>
                </Card.Text>
            </Card.Body>
            <Button variant={"btn-primary"}>Zobacz więcej</Button>
        </Card>
    );
}

export default SmallMeme;