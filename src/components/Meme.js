import React from 'react';
import {Button,Card} from "react-bootstrap";

class Meme extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.meme);
        return (
            <Card>
                <Card.Title>
                    {this.props.meme.title}
                </Card.Title>
                <Card.Body>
                    {this.props.meme.description}
                    {this.props.meme.year}
                    {this.props.meme.added_at}
                    {this.props.meme.likes}
                    {this.props.meme.views}
                    <Button>
                        <img src={"../img/thumbs_up.png"} alt={""}/>
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Meme;