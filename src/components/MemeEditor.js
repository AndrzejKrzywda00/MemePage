import React, {Component} from 'react';
import "../styles/MemeEditor.css";
import {Redirect, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

class MemeEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meme_id: localStorage.getItem('meme_id')
        }
        this.handleSubmitMeme = this.handleSubmitMeme.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    async componentDidMount() {
        
    }

    async handleSubmitMeme() {

    }

    handleTitleChange() {

    }

    handleDescriptionChange() {

    }

    handleYearChange() {

    }

    render() {

        if(localStorage.getItem("logged") !== "true") {
            return <Redirect to={"/users/login"}></Redirect>;
        }

        return (
            <div id={'editor'}>
                <h2>Edytuj mema</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Tytuł</Form.Label>
                        <Form.Control name={'text'} required={'true'} onChange={this.handleTitleChange} autoComplete={'off'} value={}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Wyjaśnienie</Form.Label>
                        <Form.Control name={'text'} as={'textarea'} rows={10} required={true} onChange={this.handleDescriptionChange} value={}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rok powstania</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Button onClick={this.handleSubmitMeme}>Aktualizuj</Button>
                </Form>

            </div>
        );
    }

}

export default withRouter(MemeEditor);