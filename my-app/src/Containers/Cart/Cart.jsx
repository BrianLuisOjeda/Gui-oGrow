import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Button } from 'react-bootstrap'
import TableCartList from './TableCartList'
import { Table, Container } from 'react-bootstrap'
import './Cart.css'

const Cart = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)
    return (
        <>
            <Container fluid className='containerCart'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            
                            <th></th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    {cartList.map(prod => {
                        return (
                            <TableCartList prod={prod} />
                        )

                    })}
                </Table>
                <Button onClick={vaciarCarrito}>Vaciar carrito</Button>
                
            </Container>

        </>
    )
}

export default Cart
