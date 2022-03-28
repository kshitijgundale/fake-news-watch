import {React} from "react";
import {Button, Row} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";

const NewsChoice = ({setCurrentPage}) => {

    const onClickFeedback = () => {
        setCurrentPage("NewsFeedback")
    }

    return (
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            <Row
                className="d-flex justify-content-center align-items-center h-100"
            >
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h2>Get relaibility score of your news</h2>
                    <Button variant="outline-light" size="lg">
                        Go
                    </Button>
                </MainCol>
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h2 style={{paddingLeft: "50px", paddingRight:"50px"}}>Get better result by helping the AI <br></br>to identify relevant content</h2>
                    <Button variant="outline-light" size="lg" onClick={onClickFeedback}>
                        Go
                    </Button>
                </MainCol>
            </Row>
        </div>
    )
}

export default NewsChoice