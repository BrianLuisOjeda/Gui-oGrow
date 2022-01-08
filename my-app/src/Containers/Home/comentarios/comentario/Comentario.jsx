import React from 'react'
import {Card} from 'react-bootstrap'
import './comentario.css'

const Comentario = () => {
    return (
        <>
            <Card className='fotoComentario'>
                <Card.Img variant="top" src="https://herbiesheadshop.com/resized/origin/common/68/Big-Bud-marijuana-seeds__CnEmLBvEmHIXPsvJ.jpg" />
                <Card.Body>
                    <Card.Title style={{color: 'black'}}>Card Title</Card.Title>
                </Card.Body>
            </Card>
            

        </>
    )
}

export default Comentario
