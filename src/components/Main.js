import React from "react";
import { Row, Col, Button} from "react-bootstrap"
import NavBar from "./NavBar"
import styled from "styled-components";
import news from "../../src/news.jpeg"

const MainCol = styled(Col)`
    color: white;
    text-align: center;
    min-height: 50vh;
    border-bottom: 3px solid;
    @media (min-width: 992px){
        border-bottom: 0px solid;
        border-right: 3px solid;
    }
`

const Main = () => (
    <div className="d-flex flex-column vh-100">
      <NavBar></NavBar>
      <Row
        className="d-flex justify-content-center align-items-center h-100"
        style={{backgroundImage: `url(${news})`, backgroundSize: "100% 100%"}}
      >
        <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
            <h2>Check veracity of news<br></br>with headline or a url</h2>
            <Button variant="outline-light" size="lg">
              Go
            </Button>
        </MainCol>
        <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
            <h2>How it works</h2>
            <Button variant="outline-light" size="lg">
              Go
            </Button>
        </MainCol>
      </Row>
    </div>
)

export default Main;