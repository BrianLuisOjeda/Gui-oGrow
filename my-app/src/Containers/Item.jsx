import React from 'react'
import { Card } from 'react-bootstrap'
import './Item.css'

const Item = ({ producto }) => {
    return (
        <>
            {Array.from({ length: 2 }).map((_, idx) => (
                
                    <Card key={producto.id} className="card" style={{ width: '14.5rem' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title>{producto.titulo}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                $ {producto.precio}
                            </Card.Subtitle>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            
            ))}
            
        </>
    )
}

export default Item
