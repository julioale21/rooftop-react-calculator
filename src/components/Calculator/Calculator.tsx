import React from "react";
import DisplayScreen from "../DisplayScreen";
import { Col } from "react-bootstrap";
import Keypad from "../Keypad";

const Calculator: React.FC = () => {
  return (
    <Col md="6" xl="4" xs="10">
      <DisplayScreen />
      <Keypad />
    </Col>
  );
};

export default Calculator;
