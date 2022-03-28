import {React, useState, useEffect} from "react";
import axios from 'axios'
import Graph from 'react-graph-vis'
import {Button, Card, Row} from 'react-bootstrap'
import NavBar from "./NavBar"
import MainCol from "./MainCol";

const Result = () => {

    const [graph, setGraph] = useState(null)

    function htmlTitle(html) {
        const container = document.createElement("div");
        container.innerHTML = html;
        return container;
    }

    const getColor = (type) => {
        if(type==="retweet"){
            return "grey"
        }
        else if(type==="tweet"){
            return "green"
        }
        else{
            return "black"
        }
    }

    useEffect(()=>{
        axios
            .get("http://localhost:3001/graph")
            .then(response=>{
                let graph_data = response.data
                const nodes = graph_data.nodes.map((element)=>(
                    {
                        id: element.id? element.id : "news",
                        label: " ",
                        title: htmlTitle(
                            `<div>
                                <a href="${element.node_url}">${element.type}</a>
                            </div>`
                        ),
                        shape: "circle",
                        size: 15,
                        color: getColor(element.type)
                    }
                ))
                const edges = graph_data.edges
                setGraph({
                    edges: edges,
                    nodes: nodes
                })
            })
    }, [])

    return (
        <div className="d-flex flex-column vh-100">
            <Row><NavBar></NavBar></Row>
            <Row
                className="d-flex justify-content-center align-items-center h-100"
            >
                <MainCol
                    className="d-flex flex-column p-0 justify-content-center align-items-center"
                    style={{height:"70vh", backgroundColor: "white", marginLeft:"30px"}}
                    lg
                >
                        {
                            graph? <Graph
                                graph={graph}
                            >
                            </Graph> : <h1>Hello</h1>
                        }
                    
                </MainCol>
                <MainCol
                    className="d-flex flex-column p-0 justify-content-center align-items-center"
                    lg
                >
                    <Card>
                        <Card.Body>
                            <Card.Title>Hello</Card.Title>
                            <Card.Text>World</Card.Text>
                        </Card.Body>
                    </Card>
                </MainCol>
            </Row>
        </div>
    )
}

export default Result