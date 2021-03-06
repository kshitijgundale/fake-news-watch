import { React } from "react";
import { Row } from "react-bootstrap";
import news from "../../src/news.jpeg"
import PredictChoice from "./PredictChoice";
import NewsForm from "./NewsForm";
import NewsFeedback from "./NewsFeedback";
import Result from "./Result";
import { useSelector } from 'react-redux'


const Predict = () => {

    const page = useSelector(state => state.page)
    console.log(page)

    return (
        <Row
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{backgroundImage: `url(${news})`, backgroundSize: "100% 100%"}}
        >
            <NewsForm></NewsForm>
            <PredictChoice></PredictChoice>
            <Result></Result>
            <NewsFeedback></NewsFeedback>
        </Row>
    )
}

export default Predict