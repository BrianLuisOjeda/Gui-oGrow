import React from 'react'
import { Container } from 'react-bootstrap'
import Formulario from './form/Formulario'
import './contacto.css'

const Contacto = () => {
    return (
        <>
            <Container fluid className='containerMayor'>
                <Container fluid className='containerContacto'>
                    <img className='imagenDeContacto' src="https://www.vbsueldos.com.ar/wp-content/uploads/2018/03/contacto.jpg" alt="imagenDeContacto" srcset="" />
                    <p className='parrafoContacto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </Container>
                <Container>
                    <Formulario />
                </Container>
            </Container>

        </>
    )
}

export default Contacto
