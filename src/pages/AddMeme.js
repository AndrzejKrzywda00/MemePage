import React, {Component} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import "../styles/addMeme.css";

class AddMeme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            title: null,
            description: null,
            year: null,
            user: localStorage.getItem('id')
        }
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleImageChange = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    handleYearChange =(event)=> {
        this.setState({year: event.target.value});
    }

    handleDescChange =(event)=> {
        this.setState({description: event.target.value});
    }

    handleTitleChange =(event)=> {
        this.setState({title: event.target.value});
    }

    async handleSubmit() {
        if(this.state.selectedFile && this.state.title && this.state.description && this.state.year)  {

            let request = await fetch('https://s401454.labagh.pl/memes', {
                method: "POST",
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    year: this.state.year,
                    added_by: this.state.user
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            });

            const response = await request.json();

            if(response) {
                console.log('Succesfully added!');
                // here perform adding an image
                let imageRequest = await fetch('https://s401454.labagh.pl/images/' + response.last_id, {
                    method: "POST",
                    body: {
                        file: this.state.selectedFile
                    },
                    headers: {
                        "Content-Type": "Multipart Form",
                        "Accept": "*/*"
                    }
                });

                const finishResponse = await imageRequest.ok;
                if(finishResponse) {
                    console.log('Success!');
                }
            }
            else {
                console.log(response);
            }
        }
        else {
            console.log(this.state);
        }
    }

    render () {
        //console.log(localStorage.getItem('logged'));
        if(localStorage.getItem("logged") !== "true") {
            return <Redirect to={"/users/login"}></Redirect>;
        }

        return (
            <div>
                <div id={'add-meme'}>
                    <h2>Dodaj swojego mema</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Tytuł</Form.Label>
                            <FormControl name={"text"} required={true} onChange={this.handleTitleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wyjaśnienie mema</Form.Label>
                            <FormControl name={"text"} as={'textarea'} rows={10} required={true} onChange={this.handleDescChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rok powstania</Form.Label>
                            <input type={'number'} min={'0'} value={'2015'} step={'1'} required={true} onChange={this.handleYearChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dodaj obrazek (jpg,jpeg,bmp,png)</Form.Label><br></br>
                            <FormControl type={"file"} onChange={this.handleImageChange}/>
                        </Form.Group>
                        <Button onClick={this.handleSubmit} id={'add-meme-btn'}>Dodaj mema</Button>
                    </Form>
                </div>
                <div id={'add-image'}>
                    <Form>
                    </Form>
                </div>
            </div>

        );
    }

}

export default AddMeme;