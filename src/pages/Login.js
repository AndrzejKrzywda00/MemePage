import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../form.css";
import Layout from "../meta/Layout";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeEmail =(event)=> {
        this.setState({email: event.target.value});
    }

    handleChangePassword =(event)=> {
        this.setState({password: event.target.value});
    }

    handleLogin =(event)=> {
        let result = fetch('https://s108.labagh.pl/users', {
            method: 'GET',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                "Content-Type": "text/plain",
                "Accept": "*/*"
            }
        }).then(response => response.json());
        console.log(result);
        event.preventDefault();
    }

    render () {
        return (
            <Form id={"login"} onSubmit={this.handleLogin}>
                <h3>Logowanie</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control type="email" placeholder="np. jan.kowalski@gmail.com" onChange={this.handleChangeEmail}/>
                    <Form.Text className="text-muted">
                        Twoje dane będą zawsze chronione
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="podaj hasło" onChange={this.handleChangePassword}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Zapamiętaj mnie" />
                </Form.Group>
                <Button variant={"primary"} type={"submit"}>Zaloguj się</Button>
            </Form>
        );
    }
}

export default Login;