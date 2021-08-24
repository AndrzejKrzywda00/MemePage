import React, {Component, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../form.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoaded: false,
            data: []
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChangeEmail =(event)=> {
        this.setState({email: event.target.value});
    }

    handleChangePassword =(event)=> {
        this.setState({password: event.target.value});
    }

    async handleLogin() {
        let response = await fetch('https://s401454.labagh.pl/users/add', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        });

        const data = await response.json();
        this.setState({data: data});
        this.setState({isLoaded: true});

        if(this.state.data[0] !== undefined) {
            localStorage.setItem('logged',true);
            localStorage.setItem('id',this.state.data[0].id);
            localStorage.setItem('nick',this.state.data[0].nick);
            localStorage.setItem('email',this.state.data[0].email);
        }
        window.location.reload(true);
    }

    render () {
        return (
            <Form id={"login"}>
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
                <Button variant={"primary"} type={"button"} onClick={this.handleLogin}>Zaloguj się</Button>
            </Form>
        );
    }
}

export default Login;