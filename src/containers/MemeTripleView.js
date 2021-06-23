import React from 'react';
import Thumbnail from '../img/meme_thumbnail.png';
import {Button, Card, CardGroup} from "react-bootstrap";
import "../styles/memeTripleView.css";

const MemeTripleView =()=> {

    const Title = "Tytuł pierwszego mema";
    const Description = "Dłuższy opis pierwszego obrazka, który dokładnie analizuje jego pochodzenie i różne aspekty związane z jego powstaniem,a potem w jakim kontekście jest używany.";

    return (
        <CardGroup>
            <Card>
                <Card.Img variant={"top"} src={Thumbnail}/>
                <Card.Body>
                    <Card.Title>
                        <h3>{Title}</h3>
                    </Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                </Card.Body>
                <Button variant={"btn-primary"}>Zobacz</Button>
            </Card>
            <Card>
                <Card.Img variant={"top"} src={Thumbnail}/>
                <Card.Body>
                    <Card.Title>
                        <h3>{Title}</h3>
                    </Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                </Card.Body>
                <Button variant={"btn-primary"}>Zobacz</Button>
            </Card>
            <Card>
                <Card.Img variant={"top"} src={Thumbnail}/>
                <Card.Body>
                    <Card.Title>
                        <h3>{Title}</h3>
                    </Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                </Card.Body>
                <Button variant={"btn-primary"}>Zobacz</Button>
            </Card>
        </CardGroup>
    );
}

export default MemeTripleView;