import NavBar from "./NavBar"
import { Form, Row } from "react-bootstrap"
import news from "../../src/news.jpeg"
import { useSelector, useDispatch } from 'react-redux'

const Settings = () => {

    const dispatch = useDispatch()
    const settings = useSelector(state => state.settings)

    const handleNumTweets = (event) => {
        dispatch({type: "CHANGE_NUM_TWEETS", numTweets: event.target.value})
    }

    const handleNumNews = (event) => {
        dispatch({type: "CHANGE_NUM_NEWS", numNews: event.target.value})
    }

    const handleIncludeRetweets = (event) => {
        dispatch({type: "CHANGE_INCLUDE_RETWEETS", includeRetweets: event.target.checked})
    }

    const handleIncludeQuotes = (event) => {
        dispatch({type: "CHANGE_INCLUDE_QUOTES", includeQuotes: event.target.checked})
    }

    const handleIncludeReplies = (event) => {
        dispatch({type: "CHANGE_INCLUDE_REPLIES", includeReplies: event.target.checked})
    }

    return (
        <Row>
        <div 
            className="d-flex flex-column vh-100 m-0"
            style={{backgroundImage: `url(${news})`, backgroundSize: "100% 100%"}}
        >
            <Row><NavBar></NavBar></Row>
            <Row className="d-flex justify-content-center align-items-center h-100">
                <Form className="d-flex flex-column mb-3 justify-content-center align-items-center border w-25" style={{backgroundColor: "white"}}>
                    <Form.Group className="d-flex justify-content-center align-items-center">
                        <Form.Label>Number of tweets</Form.Label>
                        <Form.Control 
                            className="m-3"
                            type="number"
                            min={0}
                            placeholder=""
                            style={{width: "20%"}}
                            value={settings.numTweets}
                            onChange={handleNumTweets}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center align-items-center">
                        <Form.Label>Number of related news</Form.Label>
                        <Form.Control 
                            className="m-3"
                            type="number" 
                            min={0}
                            placeholder=""
                            style={{width: "20%"}}
                            value={settings.numNews}
                            onChange={handleNumNews}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center align-items-center">
                        <Form.Label>Include Retweets</Form.Label>
                        <Form.Check 
                            className="m-3"
                            type="switch" 
                            placeholder=""
                            style={{width: "20%"}}
                            checked={settings.includeRetweets}
                            onChange={handleIncludeRetweets}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center align-items-center">
                        <Form.Label>Include Quotes</Form.Label>
                        <Form.Check 
                            className="m-3"
                            type="switch" 
                            placeholder=""
                            style={{width: "20%"}}
                            checked={settings.includeQuotes}
                            onChange={handleIncludeQuotes}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center align-items-center">
                        <Form.Label>Include Replies</Form.Label>
                        <Form.Check 
                            className="m-3"
                            type="switch" 
                            placeholder=""
                            style={{width: "20%"}}
                            checked={settings.includeReplies}
                            onChange={handleIncludeReplies}
                        />
                    </Form.Group>
                </Form>
            </Row>
        </div>
        </Row>
    )
}

export default Settings