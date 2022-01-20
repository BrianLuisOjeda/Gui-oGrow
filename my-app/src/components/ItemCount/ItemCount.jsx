import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    const [finalizar, setFinalizar] = useState(true)

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    function confirmar(count) {
        if (stock > 0) {
            onAdd(count)
            setFinalizar(false)
        }
    }
    function BotonAgregar() {
        return (
            <Button onClick={() => confirmar(count)} variant="success">
                Agregar al carrito
            </Button>
        )
    }
    function FinalizarCompra() {
        return (
            <Button variant="primary">
                <Link className='nav-link'
                 style={{color: 'white',
                        padding: '0px'}} 
                        to='/Cart'>
                    Ir al carrito
                </Link>

            </Button>
        )
    }
    return (
        <>
            <Container className='justify-content-center'>
                <Row>
                    <Col>
                        <Button
                            className="buttonCount"
                            size="sm"
                            onClick={restar}>
                            -
                        </Button>
                    </Col>
                    <Col>
                        {count}
                    </Col>
                    <Col>
                        <Button
                            className="buttonCount"
                            size="sm"
                            onClick={sumar}>
                            +
                        </Button>
                    </Col>

                    <Col>
                        {finalizar ? <BotonAgregar /> : <FinalizarCompra/>}
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default ItemCount
