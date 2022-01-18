import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({ producto }) => {
    return (
        <>
            {Array.from({ length: 1 }).map((_, idx) => (

                <Card key={producto.id} className="cardItem" >
                    <Link to={`/detalle/${producto.id}`}>
                        <Card.Img variant="top" src={producto.img1} />
                    </Link>
                    <Card.Body>
                        <Card.Title className='tituloCardItem'>{producto.titulo}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted subTituloCardItem">
                            $ precio...
                        </Card.Subtitle>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>

            ))}

        </>
    )
}

export default Item
