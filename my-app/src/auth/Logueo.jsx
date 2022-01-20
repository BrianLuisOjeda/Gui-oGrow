import React from 'react';
import { useState } from 'react'
import { Button, Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap'
import { app } from '../firebase'
import './Logueo.css'

const Logueo = (props) => {

    const [isRegistrando, setIsRegistrando] = useState(false)

    const crearUsuario = (correo, contraseña) => {
        app
            .auth()
            .createUserWithEmailAndPassword(correo, contraseña)
            .then((usuarioFirebase) => {
                props.setUsuario(usuarioFirebase);
            })
    }
    const iniciarSesion = (correo, contraseña) => {
        app.auth().signInWithEmailAndPassword(correo, contraseña)
            .then((usuarioFirebase) => {
                props.setUsuario(usuarioFirebase)

            })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        if (isRegistrando) {
            crearUsuario(correo, contraseña)
        }
        if (!isRegistrando) {
            iniciarSesion(correo, contraseña)
        }
    }

    return <>
        <Navbar >
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Button
                        className='botonRegistro d-flex'
                        variant="primary"
                        onClick={() => setIsRegistrando(!isRegistrando)}>
                        {isRegistrando ?
                            'Iniciar sesion'
                            : 'Registrate'}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid className='containerCardLogueo'>
            <Card className='containerSuperior'>
                <h1>{isRegistrando ? 'Registrate' : 'Inicia sesion'}</h1>
                <form
                    className='form'
                    style={{ width: '100%' }}
                    onSubmit={submitHandler}>
                    <input
                        className='input'
                        type="email"
                        id='email' />
                    <input
                        className='input'
                        type="password"
                        id='password' />
                    <Row>
                        <Col lg={6}>
                            <Button
                                className='botonRegistro'
                                variant="primary"
                                type='submit'>
                                {isRegistrando ?
                                    'Registrarme'
                                    : 'Iniciar sesion'}
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Card>
        </Container>

    </>;
};

export default Logueo;
