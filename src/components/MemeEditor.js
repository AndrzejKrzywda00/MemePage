import React, {Component} from 'react';
import "../styles/MemeEditor.css";
import {Redirect, withRouter} from "react-router-dom";
import {Button, Form, FormControl} from "react-bootstrap";

class MemeEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meme_id: localStorage.getItem('meme_id'),
            year: '',
            description: '',
            title: '',
            memeIsLoaded: false,
            meme_data: [],
            general: 'general'
        }
        this.handleSubmitMeme = this.handleSubmitMeme.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    async componentDidMount() {

        let request = await fetch('https://s401454.labagh.pl/memes/'+ this.state.meme_id,
            {
                Method: "GET",
                headers: new Headers({
                    Accept: "*/*"
                }),
            })
            .then(response => response.json())
            .then(data => {
                this.setState({memeIsLoaded: true});
                this.setState({meme_data: data[0]});
                this.setState({title: data[0].title});
                this.setState({description: data[0].description});
                this.setState({year: data[0].year});
            });

    }

    async handleSubmitMeme() {

        let request = await fetch('https://s401454.labagh.pl/memes/'+ this.state.meme_id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept" : "*/*"
                },
                body: JSON.stringify({
                    update_type: this.state.general,
                    year: this.state.year,
                    description: this.state.description,
                    title: this.state.title
                })
            });

        if(request.ok) {
            this.props.history.push("/single-meme");
        }

    }

    handleTitleChange =(event)=> {
        this.setState({title: event.target.value});
    }

    handleDescriptionChange =(event)=> {
        this.setState({description: event.target.value});
    }

    handleYearChange =(event)=> {
        this.setState({year: event.target.value});
    }

    render() {

        if(localStorage.getItem("logged") !== "true") {
            return <Redirect to={"/login"}></Redirect>;
        }

        const {memeIsLoaded, meme_data} = this.state;

        return (
            memeIsLoaded ?
            <div id={'editor'}>
                <h2>Edytuj mema</h2>
                <Form id={'edit-meme'}>
                    <Form.Group>
                        <Form.Label>Tytuł</Form.Label>
                        <Form.Control name={'text'} id={'title-form'} onChange={this.handleTitleChange} autoComplete={'off'} defaultValue={this.state.meme_data.title}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Wyjaśnienie</Form.Label>
                        <Form.Control name={'text'} as={'textarea'} id={'desc-form'} rows={7} required={true} onChange={this.handleDescriptionChange} defaultValue={this.state.meme_data.description}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rok powstania</Form.Label>
                        <Form.Control type={'number'} defaultValue={this.state.meme_data.year} onChange={this.handleYearChange}/>
                    </Form.Group>
                    <Button onClick={this.handleSubmitMeme} id={'submit-button'}>Aktualizuj</Button>
                </Form>
            </div>
                :
                <div>
                    <p>Loading...</p>
                </div>
        );
    }

}

export default withRouter(MemeEditor);