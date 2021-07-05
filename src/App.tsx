import React from "react";
import Calculator from "./components/Calculator";
import { Row } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <Row className="w-100 d-flex flex-column align-items-center justify-content-center">
        <Calculator />
      </Row>
    </div>
  );
}

export default App;
