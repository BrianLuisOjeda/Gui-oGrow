import React from 'react'
import './NavBar.css'

const Navbar = () => {
    return (
            <>
              <div className='componenteContenedor'>
                  <ul className='container'>
                      <li className='secciones'>Home</li>
                      <li className='secciones'>Semillas</li>
                      <li className='secciones'>Acerca de nosotros</li>
                      <li className='secciones'>Contacto</li>
                  </ul>
              </div>
            </>
    )
}

export default Navbar
