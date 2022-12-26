import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import cityImg from '../assets/dark-city.jpg';
import dcityImg from '../assets/city.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ cityImg }
                        alt="City"
                    />
                    <Carousel.Caption>
                        <h3>City image</h3>
                        <p>Lorem ipsum dolor, sit amet consecteur  adipisicing elit. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ dcityImg }
                        alt="City"
                    />
                    <Carousel.Caption>
                        <h3>Dark City image</h3>
                        <p>Lorem ipsum dolor, sit amet consecteur  adipisicing elit. </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ cityImg }
                        alt="City"
                    />
                    <Carousel.Caption>
                        <h3>City image</h3>
                        <p>Lorem ipsum dolor, sit amet consecteur  adipisicing elit. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}