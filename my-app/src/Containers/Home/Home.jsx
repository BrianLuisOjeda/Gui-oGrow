import React from 'react'
import CarouselPortadas from './carousel/CarouselPortadas'
import Metods from './metods/Metods'
import CultivoClientes from './cultivoClientes/CultivoClientes'
import Comentarios from './comentarios/Comentarios'
import Footer from '../Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { BsCurrencyDollar } from "react-icons/bs"
import { FaCannabis } from "react-icons/fa"
import { MdLocalShipping } from "react-icons/md"
import './home.css'

const Home = () => {
    return (
        <>
            <CarouselPortadas />

            <Container fluid className='containerMetods'>
                    <Row >
                        <Col sm={4} md={4} lg={4}>
                            <Metods titulo='Pago'>
                                <BsCurrencyDollar className='iconMetods' />
                            </Metods>
                        </Col>
                        <Col className='align-items-center' sm={4} md={4} lg={4}>
                            <Metods titulo='Productos' >
                                <FaCannabis className='iconMetods' />
                            </Metods>
                        </Col>
                        <Col className='align-items-center' sm={4} md={4} lg={4}>
                            <Metods titulo='Envio' >
                                <MdLocalShipping className='iconMetods' />
                            </Metods>
                        </Col>
                    </Row>
            </Container>
            <Container fluid>
                <CultivoClientes />
            </Container>
            <Container data-aos="fade-up" className='containerComentarios'
                        fluid>

                <Row>
                    <Col>
                        <h1 className='tituloComentarios'>Comentarios sobre nuestros productos</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Comentarios />
                    </Col>
                </Row>

            </Container>
            <Footer/>

        </>
    )
}

export default Home
