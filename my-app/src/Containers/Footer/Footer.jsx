import React from 'react'
import { Container } from 'react-bootstrap'
import RedSocials from './redsocials/RedSocials'
import Condiciones from './condiciones/Condiciones'
import GuiñoIcon from './guiñoIcon/GuiñoIcon'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <Container className='containerFooter' fluid>
                <GuiñoIcon />
                <RedSocials />
                <Condiciones />

            </Container>
        </>
    )
}

export default Footer
