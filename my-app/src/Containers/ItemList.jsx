import React from 'react'
import Item from './Item'
import { Row } from 'react-bootstrap'


const ItemList = ({ products }) => {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {products.map(producto => {
                    return (
                        <Item producto={producto} />
                    )
                })}
            </Row>

        </>
    )
}

export default ItemList
