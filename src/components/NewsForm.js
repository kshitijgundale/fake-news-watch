import {React, useState} from "react";
import styled from "styled-components";
import {Form, Button} from 'react-bootstrap'

var id = 0

const NewsForm = () => {

    const [inputFields, setInputFields] = useState([{id:id, text:""}])

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
        id = id + 1
        let newfield = { id: id, text: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (id) => {
        let data = [...inputFields]
        const index = data.findIndex(element => element.id === id)
        data.splice(index, 1)
        setInputFields(data)
    }
    
    return (
        <Form>
            {
                inputFields.map(({id, text})=>(
                    <Form.Group className="mb-3" controlId="news" key={id}>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter url or headline" 
                            value={text} 
                            onChange={event => handleFormChange(id, event)}
                        />
                        <Button variant="dark" size="sm" onClick={event => removeFields(id)}>
                            Remove
                        </Button>
                    </Form.Group>
                ))
            }

            <Button variant="dark" size="lg" onClick={addFields}>
                Add
            </Button>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default NewsForm