import React from 'react'
import {Card} from 'react-bootstrap'
import './FotoCliente.css'

const FotoCliente = () => {
    return (
        <>
            <Card className='cardFotoCliente' >
                <Card.Img variant="top" src="https://herbiesheadshop.com/resized/origin/common/68/Big-Bud-marijuana-seeds__CnEmLBvEmHIXPsvJ.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default FotoCliente
