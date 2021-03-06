import React from "react";
import Calculator from "./components/Calculator";
import { Container, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Container fluid className="App d-flex justify-content-center">
        <Row>
          <Header />
          <Row className="w-100 d-flex flex-column align-items-center justify-content-center">
            <Calculator />
          </Row>
          <Footer />
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
