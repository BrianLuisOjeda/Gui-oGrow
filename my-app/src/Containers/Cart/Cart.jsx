import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../../Context/CartContext'
import {Button} from 'react-bootstrap'

const Cart = () => {

    const { cartList, vaciarCarrito } = useContext(CartContext)
    return (
        <>
            { cartList.map(prod=> <li key={prod.id}>{prod.titulo} - {prod.cantidad}</li>) }
            <Button onClick={vaciarCarrito}>Vaciar carrito</Button>
        </>
    )
}

export default Cart
