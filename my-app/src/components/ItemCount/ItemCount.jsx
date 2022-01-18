import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

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
        }
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
                        <Button onClick={()=>confirmar(count)} variant="success">
                            Agregar al carrito
                        </Button>
                    </Col>

                </Row>
            </Container>


        </>
    )
}

export default ItemCount
