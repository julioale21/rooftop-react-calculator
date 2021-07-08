import React from "react";
import DisplayScreen from "../DisplayScreen";
import { Col } from "react-bootstrap";
import Keypad from "../Keypad";
import { useSelector } from "react-redux";
import IState from "../../interfaces/IState";

const Calculator: React.FC = () => {
  const display = useSelector((state: IState) => state.display);

  return (
    <Col md="6" xl="4" xs="10">
      <DisplayScreen value={display} />
      <Keypad />
    </Col>
  );
};

export default Calculator;
