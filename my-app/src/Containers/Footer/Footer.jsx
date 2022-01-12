import React from 'react'
import { Container } from 'react-bootstrap'
import RedSocials from './redsocials/RedSocials'
import Condiciones from './condiciones/Condiciones'
import GuiñoIcon from './guiñoIcon/GuiñoIcon'

const Footer = () => {
    return (
        <>
            <Container fluid style={{
                background: '#072227',
                height: '250px',
                display: 'flex',
                flex_direction: 'row',
                justify_content: 'center',
                align_items: 'center'
            }}>
                <GuiñoIcon />
                <RedSocials />
                <Condiciones />

            </Container>
        </>
    )
}

export default Footer
