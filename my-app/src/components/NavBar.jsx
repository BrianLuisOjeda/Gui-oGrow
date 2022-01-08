import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillCartFill, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar classNme='navbar' bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">GuiñoGuiñoGrow</Navbar.Brand>
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
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='secciones'>Acerca de nosotros</Nav.Link>
                            <Nav.Link className='secciones'>Contacto</Nav.Link>
                        </Nav>
                        <BsFillCartFill className='cartwidget' />
                        <FaFacebookSquare className='cartwidget' />
                        <BsInstagram className='cartwidget' />

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
