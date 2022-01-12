import React from 'react'
import {Button} from 'react-bootstrap'
import './NavegacionInter.css'

const NavegacionInter = (props) => {
    return (
        <>
          <Button className='buttonNavegacionInter' variant="outline-primary">{props.titulo}</Button>{' '}
        </>
    )
}

export default NavegacionInter
