import React from 'react'
import {Figure, Button} from 'react-bootstrap'
import {useContext} from 'react'
import {CartContext} from '../../Context/CartContext'


const TableCartList = ({ prod }) => {

    const {removeItem} = useContext(CartContext)
    return (
        <>

            <tbody key={prod.id}>
                <tr>
                    <td>
                        <Figure.Image
                            width={100}
                            height={110}
                            alt="171x180"
                            src={prod.img1}
                        />
                    </td>
                    <td>{prod.titulo}</td>
                    <td>{prod.cantidad}</td>
                    <td><Button onClick={removeItem}>X</Button></td>
                </tr>

            </tbody>
        </>
    )
}

export default TableCartList
