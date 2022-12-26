import React, { Component } from 'react'
import { Card, Container, Col, Row, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="flex"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Card.Body className="flex">
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make
                                            a type specimen book. It has survived not only five centuries.
                                </p>
                            </Card.Body>
                        </Card>

                        <Card className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="flex"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Card.Body className="flex">
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make
                                            a type specimen book. It has survived not only five centuries.
                                </p>
                            </Card.Body>
                        </Card>

                        <Card className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="flex"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Card.Body className="flex">
                                <h5>Blog post</h5>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make
                                            a type specimen book. It has survived not only five centuries.
                                </p>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col md="3">
                        <h5 className="text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make
                                            a type specimen book. It has survived not only five centuries.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}