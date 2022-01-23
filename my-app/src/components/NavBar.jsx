import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
//import { FaFacebookSquare } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Auth from '../auth/Auth'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar classNme='navbar' bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Link className='nav-link' to='/'>
                            GuiñoGuiñoGrow
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 container"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='secciones'>
                                <Link className='nav-link' to='/'>
                                    Home
                                </Link>
                            </Nav.Link>
                            <NavDropdown className='secciones' title="Categorias" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link className='nav-link' to='/Categorias/SeedStockers'>
                                        SeedStockers
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">R-kiem</NavDropdown.Item>
                                
                            </NavDropdown>
                            <Nav.Link className='secciones'>
                                <Link className='nav-link' to='/Contacto'>
                                    Contacto
                                </Link>
                            </Nav.Link>
                            <Nav.Link classNAME='secciones'>
                                <Link className='nav-link' to='/Cart'>
                                    <BsFillCartFill className='cartwidgets' />
                                </Link>
                            </Nav.Link>
                        </Nav>
                        {/*<FaFacebookSquare className='cartwidgets' />
                        <BsInstagram className='cartwidgets' />*/}                  
                        <Auth className='nav-link'/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
