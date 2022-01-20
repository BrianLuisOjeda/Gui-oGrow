import React from 'react';
import { app } from '../firebase'
import { Nav } from 'react-bootstrap'


const Auth = () => {

    const cerrarSesion = () => {
        app.auth().signOut()
    }
    return <>
        <Nav.Link
            className='secciones'
            onClick={cerrarSesion}>
            LogOut
        </Nav.Link>

    </>;
};

export default Auth;
