import React from 'react'
import { Card, Container, Button, Row, Col, Stack, Modal } from 'react-bootstrap'
import { CartContext } from '../../../Context/CartContext'
import { useState, useContext } from 'react'
import FormItem from './FormItem/FormItem'
import './itemDetail.css'

const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { agregarProducto, cartList } = useContext(CartContext)

    function onAdd(cant) {
        agregarProducto({...product, cantidad: cant})
    }

    console.log(cartList)

    return (
        <>
            <Container
                key={product.id}
                className="cardDetalle">
                <Row>
                    <Col lg='5'>
                        <Card.Img
                            className='detalleCardImg'
                            variant="left"
                            src={product.img1} />
                    </Col>
                    <Col lg='4'>
                        <Stack
                            gap={3}
                            style={{ padding: '40px' }}>
                            <h3> {product.titulo}</h3>
                            <h5>{product.crusa}</h5>
                            <Stack gap={1} >
                                <p>Dominante: "{product.dominante}"</p>
                                <p>THC: "{product.THC}"</p>
                                <p>Tipo: "{product.tipo}"</p>
                                <p>Efecto: "{product.efecto}"</p>
                                <p>Sabor: "{product.sabor}"</p>
                                <p>Rendimiento: "{product.rendimiento}"</p>
                                <p>Tipo de cultivo: "{product.cultivo}"</p>
                                <p>Ciclo de vida: "{product.cicloDeVida}"</p>
                                <Button
                                    variant="outline-info"
                                    size='sm'
                                    onClick={handleShow}>
                                    Descripcion
                                </Button>
                                <Modal
                                    show={show}
                                    onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            Acerca de {product.titulo}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {product.descripcion}
                                    </Modal.Body>
                                </Modal>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col lg='3'>
                        <FormItem onAdd={onAdd} stock={product.stock} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ItemDetail
