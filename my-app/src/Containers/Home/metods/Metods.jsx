import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Modals from '../modals/Modals'
import './metods.css'

const Metods = (props) => {
    return (
        <>
            <Card className='card' style={{ width: '18rem' }}>
                <Container>
                    <Row>
                        {props.children}
                    </Row>
                </Container>
                <Card.Body>
                    <Container className='containerTitulo'>
                        <Row>
                            <Col>
                                <Card.Title>
                                    {props.titulo}
                                </Card.Title>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Modals vermas='Ver mas' modalTitulo={props.titulo}/>
                        </Row>
                    </Container>

                </Card.Body>
            </Card>
        </>
    )
}

export default Metods
