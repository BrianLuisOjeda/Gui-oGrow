import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Button } from 'react-bootstrap'
import TableCartList from './TableCartList'
import { Container } from 'react-bootstrap'
import './Cart.css'

const Cart = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)
    return (
        <>
            {cartList.length === 0 ? <h1>tu carrito esta vacio</h1> : <Container fluid className='containerCart'>
                {cartList.map(prod => {
                    return (
                        <TableCartList prod={prod} />
                    )

                })}
                <Button
                    variant='danger'
                    onClick={vaciarCarrito}>
                    Vaciar carrito
                </Button>

            </Container>}

        </>
    )
}

export default Cart
