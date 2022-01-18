import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Modals from '../modals/Modals'
import './metods.css'

const Metods = (props) => {
    return (
        <>
            <Card className='cardMetods'>
                <Container>
                    <Row>
                        {props.children}
                    </Row>
                </Container>
                <Card.Body>

                    <Card.Title>
                        <p className='tituloMetods'>
                            {props.titulo}
                        </p>
                    </Card.Title>

                    <Container>
                        <Row>
                            <Modals vermas='Ver' modalTitulo={props.titulo} />
                        </Row>
                    </Container>

                </Card.Body>
            </Card>
        </>
    )
}

export default Metods
