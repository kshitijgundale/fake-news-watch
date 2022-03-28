import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Main from "./components/Main";
import NewsInput from "./components/NewsInput";
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
          <Route path="/newsinput" element={<NewsInput />} />
      </Routes>
    </Router>
  </Container>
);

export default App;
