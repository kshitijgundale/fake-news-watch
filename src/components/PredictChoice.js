import {React} from "react";
import {Button, Row} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";
import PredictNavButtons from "./PredictNavButtons";
import { useDispatch, useSelector, useStore } from "react-redux";

import { changePage } from "../reducers/currentPageReducer";
import { setNews } from "../reducers/similarNewsReducer";
import { setGraph } from "../reducers/graphReducer";
import axios from "axios";

import { getNewsByTags, buildGraphData } from "../utils";

const PredictChoice = () => {

    const dispatch = useDispatch()
    const store = useStore()
    const page = useSelector(state => state.page)

    const handleGetScore = () => {
        const newsInputs = store.getState().newsInputs
        const settings = store.getState().settings
        console.log(settings)
        const data = getNewsByTags(newsInputs, [], settings)
        
        axios.post("http://localhost:5000/fakenews/prediction", data)
            .then(response=>{
                let graph_data = response.data
                dispatch(setGraph(buildGraphData(graph_data)))
            })

        dispatch(changePage("Result"))
    }

    const handleSimilarNewsClick = () => {
        let data = {}
        data['statements'] = []
        data['urls'] = []
        store.getState().newsInputs.forEach(element => {
            if(element.tag === 'HEADLINE'){
                data['statements'].push(element['text'])
            }
            else{
                data['urls'].push(element['text'])
            }
        });

        axios
            .post("http://localhost:5000/fakenews/recommend", data)
            .then((response)=>{
                dispatch(setNews(response.data.news))
            })

        dispatch(changePage("NewsFeedback"))
    }

    return (page === "PredictChoice" ?
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            <Row><PredictNavButtons next={store.getState().similarNews === 0 ? "Result" : "NewsFeedback"} previous="NewsForm"></PredictNavButtons></Row>
            <Row
                className="d-flex justify-content-center align-items-center h-100"
            >
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h2>Get relaibility score of your news</h2>
                    <Button variant="outline-light" size="lg" onClick={handleGetScore}>
                        Go
                    </Button>
                </MainCol>
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h2 style={{paddingLeft: "50px", paddingRight:"50px"}}>Get better result by helping the AI <br></br>to identify relevant content</h2>
                    <Button variant="outline-light" size="lg" onClick={handleSimilarNewsClick}>
                        Go
                    </Button>
                </MainCol>
            </Row>
        </div>
        :
        null
    )
}

export default PredictChoice