import React from 'react'
import Comentario from './comentario/Comentario'
import { Row, Container, Col } from 'react-bootstrap'

const Comentarios = () => {
    return (
        <>
            <Container fluid>
                <Row lg={8}>
                    <Col lg={4}>
                        <Comentario />
                    </Col>
                    <Col lg={4}>
                        <Comentario />
                    </Col>
                    <Col lg={4}>
                        <Comentario />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Comentarios
