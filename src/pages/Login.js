import React from 'react';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../form.css";

const Login =({location})=> {
    return (
        <Layout>
            <h1>Strona logowania : <span>{location.pathname}</span></h1>
            <Form id={"login"}>
                <h3>Zaloguj się</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control type="email" placeholder="np. jan.kowalski@gmail.com" />
                    <Form.Text className="text-muted">
                        Twoje dane będą zawsze chronione
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="podaj hasło" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Zapamiętaj mnie" />
                </Form.Group>
                <Button variant={"primary"}>Zaloguj się</Button>
            </Form>
        </Layout>
    );
}

export default Login;