import React from 'react'
import { Card } from 'react-bootstrap'
import './Item.css'

const Item = ({ producto }) => {
    return (
        <>
            {Array.from({ length: 1 }).map((_, idx) => (
                
                    <Card key={producto.id} className="card" style={{ width: '14.5rem' }}>
                        <Card.Img variant="top" src={producto.img1} />
                        <Card.Body>
                            <Card.Title>{producto.titulo}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                 {producto.crusa}
                            </Card.Subtitle>
                            <Card.Text>
                                <p>Dominante: {producto.dominante}</p>
                                <p>THC: {producto.THC}</p>   
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
            
            ))}
            
        </>
    )
}

export default Item
