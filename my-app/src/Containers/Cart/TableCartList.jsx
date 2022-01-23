import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './TableCartList.css'


const TableCartList = ({ prod }) => {

    const { removeItem } = useContext(CartContext)
    return (
        <>

            <Card key={prod.id} className='cardCarrito'>
                <Card.Img className='imagenItemCart' variant="top" src={prod.img1} />
                <Card.Body className='cartInformation'>
                    <Card.Title>{prod.titulo}</Card.Title>
                    <Card.Text>
                        {prod.cantidad}
                    </Card.Text>
                    <Button onClick={removeItem} variant="danger">X</Button>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default TableCartList
