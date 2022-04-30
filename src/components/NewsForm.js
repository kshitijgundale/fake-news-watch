import {React} from "react";
import {Form, Button, Row, InputGroup} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";
import { useSelector, useDispatch } from 'react-redux'
import PredictNavButtons from "./PredictNavButtons";

import { modifyNewsText, addNewsInput, removeNews, modifyNewsTag } from "../reducers/newsInputReducer";
import { changePage } from "../reducers/currentPageReducer";

const NewsForm = () => {

    const dispatch = useDispatch()
    const newsInputs = useSelector(state => state.newsInputs)
    const page = useSelector(state => state.page)

    const handleInputChange = (id, event) => {
        dispatch(modifyNewsText(
            event.target.value,
            id
        ))
    }

    const addFields = () => {
        dispatch(addNewsInput())
    }

    const removeFields = (id) => {
        dispatch(removeNews(id))
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        dispatch(changePage("PredictChoice"))
    }

    const handleTagChange = (event, id) => {
        dispatch(modifyNewsTag(
            event.target.value,
            id
        ))
    }

    return (page === "NewsForm" ?
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            <Row><PredictNavButtons next="PredictChoice" previous=""></PredictNavButtons></Row>
            <Row
                className="d-flex justify-content-center align-items-center h-100 overflow-auto"
            >
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h3 style={{paddingRight: "50px", paddingLeft: "50px", paddingBottom: "20px"}}>
                        Add headline or URL of news you would like to verify. Any URL mentioning the news is valid e.g.(news article, facebook post, youtube videos)
                    </h3>
                </MainCol>
                <MainCol className="d-flex p-0 justify-content-center align-items-center" lg>
                    <Form className="d-flex flex-column mb-3 justify-content-center align-items-center w-100" onSubmit={event => onFormSubmit(event)}>
                        {
                            newsInputs.map(({id, text, tag})=>(
                                <InputGroup className="d-flex flex-row m-2" style={{width: "70%"}} controlId="news" key={id}>
                                    <Form.Select
                                        className="m-1"
                                        size="sm"
                                        value={tag}
                                        onChange={event => handleTagChange(event, id)}
                                    >
                                        <option>URL</option>
                                        <option>HEADLINE</option>
                                    </Form.Select>
                                    <Form.Control 
                                        className="m-1 w-50"
                                        type="text" 
                                        placeholder="Enter url or headline" 
                                        value={text} 
                                        onChange={event => handleInputChange(id, event)}
                                    />
                                    <Button className="m-1" variant="danger" size="sm" onClick={event => removeFields(id)}>
                                        Remove
                                    </Button>
                                </InputGroup>
                            ))
                        }

                        <Button variant="outline-light m-3" size="md" onClick={addFields}>
                            Add
                        </Button>
                        
                        <Button className="m-2" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </MainCol>
            </Row>            
        </div>
        :
        null
    )
}

export default NewsForm