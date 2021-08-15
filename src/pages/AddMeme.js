import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../form.css";

class AddMeme extends Component {

    /*
    How does this form should look like?
    1. Adding title
    2. Adding explanation
    3. Adding a photo
     */

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    handleImageChange = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    handleSubmit() {
        // here make it work with asking the backend to save data
    }

    render () {
        return (
            <div>
                <h2>Dodaj swojego mema</h2>
                <Form>
                    <Form.Group>
                        <label>Tytuł</label>
                        <input name={"text"} required={true}/>
                    </Form.Group>
                    <Form.Group>
                        <label>Wyjaśnienie mema</label>
                        <input name={"text-multiline"} required={true}/>
                    </Form.Group>
                    <Form.Group>
                        <label>Dodaj obrazek</label>
                        <input type={"file"} onChange={this.handleImageChange}/>
                    </Form.Group>

                    <Button onClick={this.handleSubmit}>Dodaj mema</Button>
                </Form>
            </div>
        );
    }

}

export default AddMeme;