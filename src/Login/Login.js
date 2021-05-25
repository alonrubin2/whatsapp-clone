import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import { v4 as uuidV4 } from 'uuid';
import './Login.scss';

const Login = ({ onIdSubmit }) => {

    const idRef = useRef();

    function submit(e) {
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(uuidV4());
    }

    return (
        <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
            <Form onSubmit={submit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="mr-2" onSubmit={submit}>Login</Button>
                <Button variant="secondary" className="mr-2" onClick={createNewId}>Create A New Id</Button>
            </Form>
        </Container>
    );
}

export default Login;
