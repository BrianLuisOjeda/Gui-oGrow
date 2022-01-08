import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FotoCliente from './FotoCliente'
import './cultivoClientes.css'

const CultivoClientes = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col>
                        <h3 className='titulo'>Cultivo de nuestros clientes</h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{margin: '80px 0px 80px 0px'}}>
                <Row >
                    <Col>
                        <FotoCliente/>
                    </Col>
                    <Col>
                        <FotoCliente/>
                    </Col>
                    <Col>
                        <FotoCliente/>
                    </Col>
                    <Col>
                        <FotoCliente/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CultivoClientes
