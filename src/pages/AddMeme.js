import React, {Component} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {Redirect, withRouter} from 'react-router-dom';
import "../styles/addMeme.css";

class AddMeme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            title: null,
            description: null,
            year: null,
            user: localStorage.getItem('id'),
            memes: []
        }
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageSubmit = this.handleImageSubmit.bind(this);
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

            let request = await fetch('https://s401454.labagh.pl/memes/', {
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
            const responseOk = await request.ok;

            if(responseOk) {

                var formData = new FormData();
                formData.append("file",this.state.selectedFile,this.state.selectedFile.name);

                let imageRequest = await fetch('https://s401454.labagh.pl/images/' + response.last_id, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "*/*"
                    }
                });

                const finishResponse = await imageRequest.ok;

                if(finishResponse) {
                    this.props.history.push("/");
                }
            }
            else {
                console.log('Adding meme didnt work');
            }
        }
        else {
            console.log('Empty fields');
        }
    }

    async handleImageSubmit() {

    }

    render () {

        if(localStorage.getItem("logged") !== "true") {
            return <Redirect to={"/login"}></Redirect>;
        }

        return (
            <div>
                <div id={'add-meme'}>
                    <h2>Dodaj swojego mema</h2>
                    <Form className={'submit'} encType={'multipart/form-data'}>
                        <Form.Group>
                            <Form.Label id={'formlabel'}>Tytu??</Form.Label>
                            <FormControl name={"text"} required={true} onChange={this.handleTitleChange} autoComplete={'off'}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label id={'formlabel'}>Wyja??nienie mema</Form.Label>
                            <FormControl name={"text"} as={'textarea'} rows={10} required={true} onChange={this.handleDescChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label id={'formlabel'}>Rok powstania</Form.Label>
                            <input type={'number'} defaultValue={'2015'} required={true} onChange={this.handleYearChange}/>
                        </Form.Group>
                        <Form.Group controlId="formFile">
                            <Form.Label id={'formlabel'}>Dodaj obrazek (jpg,jpeg,bmp,png)</Form.Label><br></br>
                            <Form.Control type={"file"} onChange={this.handleImageChange}/>
                        </Form.Group>
                        <Button onClick={this.handleSubmit} id={'add-meme-btn'}>Dodaj mema</Button>
                    </Form>
                </div>
            </div>

        );
    }

}

export default withRouter(AddMeme);