import React from "react";
import "../styles/Register.css";
import {Button, Form, FormControl, FormLabel} from "react-bootstrap";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            email: '',
            password: ''
        };

        this.handleChangeNick = this.handleChangeNick.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNick =(event)=> {
        this.setState({nick: event.target.value});
    }

    handleChangeEmail =(event)=> {
        this.setState({email: event.target.value});
    }

    handleChangePassword =(event)=> {
        this.setState({password: event.target.value});
    }

    handleSubmit =(event)=> {
        let result = fetch("https://s401454.labagh.pl/users", {
            method: "POST",
            body: JSON.stringify({
                nick: this.state.nick,
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            }
        }).then(response => response.json());
        console.log(result);

        event.preventDefault();
    }

    render () {
        return (
            <div id={"register"}>
                <h3>Rejestracja</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <FormLabel>Twój nick</FormLabel>
                        <FormControl type="nick" placeholder={"np. kwiatuszek123"} id={"nick-input"} onChange={this.handleChangeNick} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Adres email</Form.Label>
                        <Form.Control type="email" placeholder="np. jan.kowalski@gmail.com" onChange={this.handleChangeEmail}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Hasło</Form.Label>
                        <Form.Control type="password" placeholder="" onChange={this.handleChangePassword}/>
                    </Form.Group>
                    <Button variant={"success"} type="submit">Zarejestruj się</Button>
                </Form>
            </div>
        );
    }

}

export default Register;