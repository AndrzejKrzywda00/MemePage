import React from "react";
import "../styles/Register.css";
import {Button, Form, FormControl, FormLabel} from "react-bootstrap";
import PostRegister from "../meta/PostRegister";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.preventDefault();
        PostRegister(this.state);
        console.log("Wykonano dodanie użytkownika z nickiem : " + this.state.nick);
    }

    render () {
        return (
            <div id={"register"}>
                <h3>Rejestracja</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <FormLabel>Twój nick</FormLabel>
                        <FormControl type={"nick"} placeholder={"np. kwiatuszek123"} id={"nick-input"} value={this.state.nick} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Adres email</Form.Label>
                        <Form.Control type="email" placeholder="np. jan.kowalski@gmail.com" value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password" placeholder="" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant={"success"} type={"submit"}>Zarejestruj się</Button>
                </Form>
            </div>
        );
    }

}

export default Register;