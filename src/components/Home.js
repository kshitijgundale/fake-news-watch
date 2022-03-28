import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import worldMap from "../../src/world-map.png";

import Title from "./Title";

const Home = () => (
    <Container
        className="d-flex flex-column justify-content-center align-items-center vh-100"
        style={{backgroundImage: `url(${worldMap})`, backgroundSize: "100% 100%"}}
    >
      <Row className="d-flex">
        <Col lg className="d-flex p-0 justify-content-center align-items-center">
          <Title fontSize="100px" color="red">F</Title>
          <Title fontSize="100px" color="blue">ake</Title>
        </Col>
        <Col lg className="d-flex p-0 justify-content-center align-items-center">
          <Title fontSize="100px" color="red">N</Title>
          <Title fontSize="100px" color="blue">ews</Title>
        </Col>
        <Col lg className="d-flex p-0 justify-content-center align-items-center">
          <Title fontSize="100px" color="red">W</Title>
          <Title fontSize="100px" color="blue">atch</Title>
        </Col>
      </Row>
      <Link to="/main" style={{ textDecoration:'none', color:"white" }}>
        <Button variant="dark" size="lg">START</Button>
      </Link>
    </Container>
);

export default Home