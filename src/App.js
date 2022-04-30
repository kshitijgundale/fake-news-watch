import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Main from "./components/Main";
import Predict from "./components/Predict";
import Settings from "./components/Setting";
import HowItWorks from "./components/HowItWorks";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

const App = () => {

  useEffect(() => {
    axios.get("https://fakenewswatch-server.herokuapp.com/fakenews/ping")
  }, [])

  return (
    <Container fluid>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
      </Router>
    </Container>
  )
};

export default App;
