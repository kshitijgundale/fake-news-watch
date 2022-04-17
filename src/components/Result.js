import { React, useState } from "react";
import Graph from "react-graph-vis";
import { Card, Row, Col, Table } from "react-bootstrap";
import NavBar from "./NavBar";
import MainCol from "./MainCol";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { useSelector } from "react-redux";

const Result = () => {

  const page = useSelector(state => state.page);
  const graph = useSelector(state => state.graph);

  const [currNode, setCurrNode] = useState("news");

  const events = {
    selectNode: (event) => {
      setCurrNode(event.nodes[0]);
    },
  };

  const scoreStyle = (value) => {
    let color = "red";
    if (value > 40) color = "yellow";
    if (value > 80) color = "green";
    return {
      color: color,
      paddingTop: "20px",
      fontSize: "50px",
    };
  };

  return page === "Result" ? (
    <div className="d-flex flex-column vh-100">
      <Row>
        <NavBar></NavBar>
      </Row>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <MainCol
          className="d-flex flex-column p-0 justify-content-center align-items-center"
          style={{
            height: "70vh",
            backgroundColor: "white",
            marginLeft: "50px",
          }}
          lg
        >
          {graph ? (
            <Graph graph={graph} events={events}></Graph>
          ) : (
            <h2 style={{ color: "black" }}>Fetching Propagation Graph...</h2>
          )}
        </MainCol>
        <MainCol
          className="d-flex flex-column p-0 justify-content-center align-items-center"
          lg
        >
          {graph ? (
            <Card>
              <Card.Title style={scoreStyle(graph.result)}>
                {Math.round(graph.result)}
              </Card.Title>
              <Card.Text style={{ color: "black" }}>
                Reliability Score
              </Card.Text>
              <Card.Body>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <th>Number of tweets</th>
                      <th>{graph.metadata["num_tweets"]}</th>
                    </tr>
                    <tr>
                      <th>Number of retweets</th>
                      <th>{graph.metadata["num_retweets"]}</th>
                    </tr>
                    <tr>
                      <th>Lifetime of news on Twitter</th>
                      <th>{`${Math.round(
                        graph.metadata["propagation_time"] / 3600
                      )} hours`}</th>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ) : (
            <h2 style={{ color: "white" }}>Fetching Result...</h2>
          )}
        </MainCol>
        <MainCol
          className="d-flex flex-column p-0 justify-content-center align-items-center"
          lg
        >
          <Col
            className="d-flex flex-column p-0 justify-content-center align-items-center h-100 w-50"
            style={{ height: "30vh", fontSize: "10" }}
          >
            {currNode === "news" ? (
              <div>
                <span style={{ fontSize: "20px" }}>
                  Click on any node in the graph to see the tweet.
                </span>
              </div>
            ) : (
              <TwitterTweetEmbed key={currNode} tweetId={currNode} />
            )}
          </Col>
        </MainCol>
      </Row>
    </div>
  ) : null;
};

export default Result;
