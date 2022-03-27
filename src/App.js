import "./App.css";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Main from "./components/Main";
import NewsForm from "./components/NewsForm";

const App = () => (
  <Container fluid>
    <Home></Home>
    <Main></Main>
  </Container>
);

export default App;
