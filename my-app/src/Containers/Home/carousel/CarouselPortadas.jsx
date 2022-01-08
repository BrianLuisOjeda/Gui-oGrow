import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carouselPortadas.css'

const CarouselPortadas = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="https://herbiesheadshop.com/resized/original/common/41/Seed-Stockers-Top-5-Flagship-Strains-Series__LqgBYcymFVASBdwE.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="https://www.cannabislandia.com/blog/wp-content/uploads/2017/11/post-kiem.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCarousel"
                        src="https://www.dopesmokeshopmed.com/wp-content/uploads/2021/03/logo.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselPortadas
