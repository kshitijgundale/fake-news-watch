import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Main from "./components/Main";
import Predict from "./components/Predict";
import Settings from "./components/Setting";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

const App = () => (
  <Container fluid>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </Container>
);

export default App;
