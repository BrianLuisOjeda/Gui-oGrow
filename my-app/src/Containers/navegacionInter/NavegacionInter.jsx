import React from 'react'
import {Card} from 'react-bootstrap'
import './NavegacionInter.css'

const NavegacionInter = (props) => {
    return (
        <>
            <Card className='cardNavegacion'>
                <Card.Body>
                    <Card.Title className='titulo'>{props.titulo}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default NavegacionInter
