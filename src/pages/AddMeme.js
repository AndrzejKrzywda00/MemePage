import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../form.css";
import Layout from "../meta/Layout";

class AddMeme extends Component {

    constructor(props) {
        super(props);
    }

    handleAddMeme(){

    }

    render (){
        return (
            <Form id={"add-meme"} onSubmit={this.handleAddMeme}>
                <h3>Dodaj swojego mema</h3>
                <Form.Group controlId="formAddMemeTitle">
                    <Form.Label>Akceptowane są zdjęcia w formatach...</Form.Label>
                </Form.Group>
                <Form.Group controlId="formAddMeme">
                    <Form.Label>Wybierz zdjęcie</Form.Label>
                    <input type={"file"} class="form-control-file">Wybierz plik</input>
                </Form.Group>
                <Button variant={"primary"} type={"submit"}>Dodaj</Button>
            </Form>
        );
    }

}

export default AddMeme;