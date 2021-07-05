import React from "react";
import Calculator from "./components/Calculator";
import { Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid className="App d-flex justify-content-center">
      <Row className="w-100 d-flex flex-column align-items-center justify-content-center">
        <Calculator />
      </Row>
    </Container>
  );
}

export default App;
