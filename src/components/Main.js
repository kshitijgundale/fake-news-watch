import React from "react";
import { Row, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import NavBar from "./NavBar"
import news from "../../src/news.jpeg"
import MainCol from "./MainCol"

const Main = () => (
    <div className="d-flex flex-column vh-100">
      <NavBar></NavBar>
      <Row
        className="d-flex justify-content-center align-items-center h-100"
        style={{backgroundImage: `url(${news})`, backgroundSize: "100% 100%"}}
      >
        <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
            <h2>Check veracity of news<br></br>with headline or a url</h2>
            <Link to="/predict" style={{ textDecoration:'none', color:"white" }}>
              <Button variant="outline-light" size="lg">Go</Button>
            </Link>
        </MainCol>
        <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
            <h2>How it works</h2>
            <Link to="/howitworks" style={{ textDecoration:'none', color:"white" }}>
              <Button variant="outline-light" size="lg">
                Go
              </Button>
            </Link>
        </MainCol>
      </Row>
    </div>
)

export default Main;