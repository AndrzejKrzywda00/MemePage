import React from "react";
import "../styles/Register.css";
import {Button, Form, FormControl, FormLabel} from "react-bootstrap";

const Register = () => {
    return (
        <div id={"register"}>
            <h3>Zarejestruj się</h3>
            <Form>
                <Form.Group controlId={"formGroupNick"}>
                    <FormLabel>Twój nick</FormLabel>
                    <FormControl type={"nick"} placeholder={"np. kwiatuszek123"} id={"nick-input"}/>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control type="email" placeholder="np. jan.kowalski@gmail.com" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Button variant={"success"}>Zarejestruj się</Button>
            </Form>
        </div>
    );
}

export default Register;