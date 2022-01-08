import React from 'react'
import { Container } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import './GuiñoIcon.css'

const GuiñoIcon = () => {
    return (
        <>
            <Container fluid className='containerGuiño'>
                <FaUserCircle className='icono' />
                <h6 className='tituloo'>Guiño Guiño Grow</h6>
            </Container>

        </>
    )
}

export default GuiñoIcon
