import React from "react";
import { Container, Row } from "react-bootstrap";
import ButtonCalc from "../Button";

const Keypad: React.FC = () => {
  return (
    <Container className="bg-light">
      <Row>
        <ButtonCalc value="7" />
        <ButtonCalc value="8" />
        <ButtonCalc value="9" />
        <ButtonCalc value="DEL" />

        <ButtonCalc value="5" />
        <ButtonCalc value="4" />
        <ButtonCalc value="6" />
        <ButtonCalc value="+" />

        <ButtonCalc value="1" />
        <ButtonCalc value="2" />
        <ButtonCalc value="3" />
        <ButtonCalc value="-" />

        <ButtonCalc value="." />
        <ButtonCalc value="0" />
        <ButtonCalc value="/" />
        <ButtonCalc value="x" />

        <ButtonCalc span={6} value="RESET" />
        <ButtonCalc span={6} value="=" />
      </Row>
    </Container>
  );
};

export default Keypad;
