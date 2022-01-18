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
                        <h3 className='tituloClientes'>Cultivo de nuestros clientes</h3>
                    </Col>
                </Row>
            </Container>
            <Container className='containerFotoCliente' fluid >
                <Row className='subContainerFotoCliente'>
   
                        <FotoCliente/>


                        <FotoCliente/>
          
    
                        <FotoCliente/>
 
                        <FotoCliente/>
                </Row>
            </Container>
        </>
    )
}

export default CultivoClientes
