import { React } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import NavBar from './NavBar'
import news from "../../src/news.jpeg"

const HowItWorksCard = ({number, text}) => {
    return (
        <Card className='m-3'>
            <Card.Body>
                <Card.Title className='d-flex justify-content-center align-items-center'><h2>{number}</h2></Card.Title>
                <Card.Text><h5>{text}</h5></Card.Text>
            </Card.Body>
        </Card>
    )
}

const HowItWorks = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            <Row
                className="h-100 overflow-auto"
                style={{backgroundImage: `url(${news})`, backgroundSize: "100% 100%", backgroundPosition: "center", backgroundAttachment: "fixed"}}
            >
                <Col 
                    sm={12}
                    className="d-flex justify-content-center align-items-center"
                >
                    <h2 style={{color:'white'}}>How FakeNewsWatch works</h2>
                </Col>
                <Col lg={6}>
                    <HowItWorksCard number={1} text="Enter a short statement or headline of news you want to verify. Alternatively you can also provide URL of that mentions the news. Add as many inputs as you would like."></HowItWorksCard>
                </Col>
                <Col lg={6}>
                    <HowItWorksCard number={2} text="Get reliability score of your news directly OR get more accurate result by helping AI learn which news articles are relevant."></HowItWorksCard>
                </Col>
                <Col lg={6}>
                    <HowItWorksCard number={3} text="Using your news inputs and optional labelled news, we scrape Twitter for relevant tweets. Once retrieved, these tweets are arranged into a propagation graph which encodes how news spreads on Twitter."></HowItWorksCard>
                </Col>
                <Col lg={6}>
                    <HowItWorksCard number={4} text="Propagation graph prepared in previous step is fed into AI model which is trained to classify news based on thier propagation on Twitter."></HowItWorksCard>
                </Col>
            </Row>
        </div>
    )
}

export default HowItWorks