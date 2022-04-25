import {React, useState} from "react";
import {Button, Row} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";
import NewsCard from "./NewsCard";
import PredictNavButtons from "./PredictNavButtons";
import { useDispatch, useSelector, useStore } from "react-redux";
import axios from "axios";

import { labelNews } from "../reducers/similarNewsReducer";
import { changePage } from "../reducers/currentPageReducer";
import { setGraph } from "../reducers/graphReducer";

import { getNewsByTags, buildGraphData } from "../utils";

const NewsFeedback = () => {

    const dispatch = useDispatch()
    const store = useStore()
    const similarNews = useSelector(state => state.similarNews)
    const page = useSelector(state => state.page)

    const [currNews, setCurrNews] = useState(0)

    const handlePrevious = () => {
        setCurrNews(currNews-1)
    }

    const handleNext = () => {
        setCurrNews(currNews+1)
    }

    const handleRadioChange = (id, event) => {
        dispatch(labelNews(id, event.target.value))
    }

    const handleSubmit= () => {

        const newsInputs = store.getState().newsInputs
        const settings = store.getState().settings
        const feedback = similarNews.reduce((r, e)=>{
            if(e.label === "relevant") { r.push(e.url) }
            return r
        }, [])
        const data = getNewsByTags(newsInputs, feedback, settings)

        axios.post("https://fakenewswatch-server.herokuapp.com/fakenews/prediction", data)
            .then(response=>{
                let graph_data = response.data
                dispatch(setGraph(buildGraphData(graph_data)))
            })

        dispatch(changePage("Result"))
    }

    return (page === "NewsFeedback" ?
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            <Row><PredictNavButtons next="Result" previous="PredictChoice"></PredictNavButtons></Row>
            <Row
                className="d-flex justify-content-center align-items-center h-100"
            > 
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h3 style={{paddingRight: "50px", paddingLeft: "50px", paddingBottom: "20px"}}>
                        AI can make better decisions when provided with relevant content. <br></br> Label as many relevant news content as you would like to. Click submit when done.
                    </h3>
                    <Button type="submit" size="md" className="m-3" onClick={handleSubmit}>Submit</Button>
                </MainCol>
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    {
                        similarNews.length > 0 ? (<NewsCard
                            id={similarNews[currNews].id}
                            image={similarNews[currNews].image}
                            title={similarNews[currNews].title}
                            text={similarNews[currNews].text}
                            url={similarNews[currNews].url}
                            handleRadioChange={handleRadioChange}
                            value={similarNews[currNews].label}
                        />) : <div className="d-flex flex-column p-0 justify-content-center align-items-center" style={{fontSize: "25px"}}>Fetching related news...</div>
                    }
                    <div className="d-flex p-0 justify-content-center align-items-center">
                        <Button variant="light" size="md" className="m-3" disabled={currNews===0} onClick={handlePrevious}>Previous</Button>
                        <Button variant="light" size="md" className="m-3" disabled={currNews===similarNews.length-1} onClick={handleNext}>Next</Button>
                    </div>
                </MainCol>
            </Row>
        </div>
        :
        null
    )
}

export default NewsFeedback