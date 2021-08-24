import React, {Component} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import "../styles/addMeme.css";

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
        //console.log(localStorage.getItem('logged'));
        if(localStorage.getItem("logged") === "false") {
            return <Redirect to={"/users/login"}></Redirect>;
        }

        return (
            <div id={'add-meme'}>
                <h2>Dodaj swojego mema</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Tytuł</Form.Label>
                        <FormControl name={"text"} required={true}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Wyjaśnienie mema</Form.Label>
                        <FormControl name={"text-multiline"} required={true}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rok powstania</Form.Label>
                        <FormControl name={'text'} required={true}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Dodaj obrazek (jpg,jpeg,bmp,png)</Form.Label><br></br>
                        <FormControl type={"file"} onChange={this.handleImageChange}/>
                    </Form.Group>
                    <Button onClick={this.handleSubmit} id={'add-meme-btn'}>Dodaj mema</Button>
                </Form>
            </div>
        );
    }

}

export default AddMeme;