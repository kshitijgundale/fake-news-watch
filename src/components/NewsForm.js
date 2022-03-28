import {React} from "react";
import {Form, Button, Row} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";

const NewsForm = ({inputFields, setInputFields, setCurrentPage, id, setId}) => {

    const handleFormChange = (id, event) => {
        let data = [...inputFields]
        data.forEach((element, index) => {
            if(element.id === id) {
                data[index].text = event.target.value;
            }
        });
        console.log(event.target.value)
        setInputFields(data)
    }

    const addFields = () => {
        let new_id = id+1
        setId(new_id)
        let newfield = { id: new_id, text: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (id) => {
        let data = [...inputFields]
        const index = data.findIndex(element => element.id === id)
        data.splice(index, 1)
        setInputFields(data)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setCurrentPage("NewsChoice")
    }

    return (
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            
            <Row
                className="d-flex justify-content-center align-items-center h-100"
            >
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <h3 style={{paddingRight: "50px", paddingLeft: "50px", paddingBottom: "20px"}}>
                        Add headline or URL of news you would like to verify. Any URL mentioning the news is valid e.g.(news article, facebook post, youtube videos)
                    </h3>
                </MainCol>
                <MainCol className="d-flex flex-column p-0 justify-content-center align-items-center" lg>
                    <Form className="w-100" onSubmit={event => onSubmit(event)}>
                        {
                            inputFields.map(({id, text})=>(
                                <Form.Group className=" d-flex mb-3 justify-content-center align-items-center" controlId="news" key={id}>
                                    <Form.Control 
                                        className="m-1 w-50"
                                        type="text" 
                                        placeholder="Enter url or headline" 
                                        value={text} 
                                        onChange={event => handleFormChange(id, event)}
                                    />
                                    <Button className="m-1" variant="danger" size="sm" onClick={event => removeFields(id)}>
                                        Remove
                                    </Button>
                                </Form.Group>
                            ))
                        }

                        <Button variant="outline-light" size="md" onClick={addFields}>
                            Add
                        </Button>
                        
                        <Button className="m-3" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </MainCol>
            </Row>            
        </div>
    )
}

export default NewsForm