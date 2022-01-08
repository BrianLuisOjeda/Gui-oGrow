import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import './RedSocials.css'

const RedSocials = () => {
    return (
        <>
            <Container fluid className='containerRedSocials'>
                <h5 className='titulo'>Nuestras redes sociales</h5>
                <div className='redesSociales'>
                    <FaFacebookSquare className='cartwidget' />
                    <BsInstagram className='cartwidget' />
                    <BsWhatsapp className='cartwidget'/>
                </div>
            </Container>
        </>
    )
}

export default RedSocials
