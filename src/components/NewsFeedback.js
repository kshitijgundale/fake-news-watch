import {React, useState, useEffect} from "react";
import axios from 'axios'
import {Button, Row} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";
import NewsCard from "./NewsCard";
import PlaceHolder from "./NewsPlaceholder";

const NewsFeedback = ({setCurrentPage}) => {

    const [news, setNews] = useState([])
    const [currNews, setCurrNews] = useState(0)
    const [newsLabel, setNewsLabel] = useState([])

    useEffect(()=>{
        axios
            .get("http://localhost:3001/news")
            .then(response=>{
                setNewsLabel(Array(response.data.length).fill("not-sure"))
                setNews(response.data)
            })
    }, [])

    const handlePrevious = () => {
        setCurrNews(currNews-1)
    }

    const handleNext = () => {
        setCurrNews(currNews+1)
    }

    const handleRadioChange = (event) => {
        let data = [...newsLabel]
        data[currNews] = event.target.value
        setNewsLabel(data)
    }

    const handleSubmit= () => {
        setCurrentPage("Result")
    }

    return (
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
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
                        news.length > 0 ? (<NewsCard
                            image={news[currNews].image}
                            title={news[currNews].title}
                            text={news[currNews].text}
                            url={news[currNews].url}
                            handleRadioChange={handleRadioChange}
                            value={newsLabel[currNews]}
                        />) : <PlaceHolder />
                    }
                    <div className="d-flex p-0 justify-content-center align-items-center">
                        <Button variant="light" size="md" className="m-3" disabled={currNews===0} onClick={handlePrevious}>Previous</Button>
                        <Button variant="light" size="md" className="m-3" disabled={currNews===news.length-1} onClick={handleNext}>Next</Button>
                    </div>
                </MainCol>
            </Row>
        </div>
    )
}

export default NewsFeedback