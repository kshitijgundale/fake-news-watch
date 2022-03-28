import React from "react"
import { Card, Form } from "react-bootstrap"
import styled from "styled-components"

const Radio = styled(Form.Check)`
    color: black;
    size: 25spx;
    margin: 10px;
`

const NewsLabelForm = ({value, handleRadioChange}) => {
    return (
        <Form className="d-flex justify-content-center align-items-center" >
                <Radio 
                    type="radio"
                    id="relevant"
                    value="relevant"
                    name="news-label"
                    label="Relevant"
                    checked={value==="relevant"}
                    onChange={(event)=>handleRadioChange(event)}
                />
                <Radio
                    type="radio"
                    id="not-relevant"
                    value="not-relevant"
                    name="news-label"
                    label="Not Relevant"
                    checked={value==="not-relevant"}
                    onChange={(event)=>handleRadioChange(event)}
                />
                <Radio
                    type="radio"
                    id="not-sure"
                    value="not-sure"
                    name="news-label"
                    label="Not Sure"
                    checked={value==="not-sure"}
                    onChange={(event)=>handleRadioChange(event)}
                />
        </Form>
    )
}

const NewsCard = ({image, title, text, url, value, handleRadioChange}) => {
    return (
        <Card className="w-50"> 
            <Card.Img variant="top" src={image} style={{height: "15vh"}}></Card.Img>
            <Card.Body>
                <Card.Title style={{color: "black"}}>
                    <a href={url}>
                        {title}
                    </a>
                </Card.Title>
                <Card.Text style={{color: "black"}}>{text}</Card.Text>
            </Card.Body>
            <NewsLabelForm value={value} handleRadioChange={handleRadioChange}></NewsLabelForm>
        </Card>
    )
}

export default NewsCard