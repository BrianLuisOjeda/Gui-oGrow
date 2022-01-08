import React from 'react'
import Comentario from './comentario/Comentario'
import { Row, Container, Col } from 'react-bootstrap'

const Comentarios = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Comentario />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Comentario />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Comentario />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Comentarios
